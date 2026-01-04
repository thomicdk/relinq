import { Enumerable } from './enumerable';
import { Grouping } from './grouping';

export class Lookup<TKey, TElement> extends Enumerable<Grouping<TKey, TElement>> {
  /** @internal */
  private readonly map: Map<string, TElement[]>;
  /** @internal */
  private readonly keys: string[];

  /** @internal */
  constructor() {
    super(() => this.generateGroupings());
    this.map = new Map();
    this.keys = [];
  }

  /** @internal */
  add(key: TKey, element: TElement) {
    const sKey = this.serializeKey(key);
    let list: TElement[];
    if (!this.map.has(sKey)) {
      list = [];
      this.map.set(sKey, list);
      this.keys.push(sKey);
    } else {
      list = this.map.get(sKey)!;
    }
    list.push(element);
  }

  get(key: TKey): Enumerable<TElement> {
    const sKey = this.serializeKey(key);
    return this.map.has(sKey)
      ? new Enumerable<TElement>(this.map.get(sKey)!)
      : Enumerable.empty<TElement>();
  }

  get size() {
    return this.map.size;
  }

  contains(key: TKey): boolean {
    const sKey = this.serializeKey(key);
    return this.map.has(sKey);
  }

  /** @internal */
  private *generateGroupings(): Generator<Grouping<TKey, TElement>> {
    for (const sKey of this.keys) {
      const elements = new Enumerable(this.map.get(sKey)!);
      yield new Grouping(this.deserializeKey(sKey), elements);
    }
  }

  *[Symbol.iterator](): Generator<Grouping<TKey, TElement>> {
    yield* this.generateGroupings();
  }

  toString() {
    return 'Lookup';
  }

  /** @internal */
  private serializeKey(key: TKey): string {
    return JSON.stringify(key);
  }

  /** @internal */
  private deserializeKey(key: string): TKey {
    return JSON.parse(key);
  }
}
