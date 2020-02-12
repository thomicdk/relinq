import { DeferredIterable } from "./deferred-iterable";
import { Enumerable } from './enumerable';

export class Grouping<TKey, TElement> extends Enumerable<TElement> {

  /** @internal */
  private readonly _key: TKey;

  /** @internal */
  constructor(key: TKey, elements: DeferredIterable<TElement>) {
    super(elements);
    this._key = key;
  }

  get key(): TKey {
    return this._key;
  }
}
