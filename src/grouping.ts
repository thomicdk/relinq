import { Enumerable } from './enumerable';

export class Grouping<TKey, TElement> extends Enumerable<TElement> {

  /** @internal */
  private readonly _key: TKey;

  /** @internal */
  constructor(key: TKey, elements: Enumerable<TElement>) {
    super(elements);
    this._key = key;
  }

  get key(): TKey {
    return this._key;
  }

  toString() {
    return 'Grouping';
  }
}
