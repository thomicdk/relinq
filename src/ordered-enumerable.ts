import { Enumerable } from './enumerable';
import { IComparer, CompoundComparer, defaultComparerFactory, ProjectionComparer, ReverseComparer } from './comparer';

export class OrderedEnumerable<TElement> extends Enumerable<TElement> {

  /** @internal */
  constructor(
    source: Iterable<TElement> | (() => Generator<TElement>),
    /** @internal */
    private readonly comparer: IComparer<TElement>) {
    super(source);
  }

  /** @internal */
  createOrderedEnumerable<TKey>(keySelector: (element: TElement) => TKey, comparer: IComparer<TKey>, descending: boolean): OrderedEnumerable<TElement> {
    let secondaryComparer: IComparer<TElement> = new ProjectionComparer<TElement, TKey> (keySelector, comparer);
    if (descending) {
        secondaryComparer = new ReverseComparer<TElement>(secondaryComparer);
    }

    const orderedEnumerable = new OrderedEnumerable<TElement>(this.source, new CompoundComparer<TElement>(this.comparer, secondaryComparer));
    return orderedEnumerable;
  }

  *[Symbol.iterator]() {
    const array = [...super[Symbol.iterator]()];
    array.sort((x, y) => this.comparer.compare(x,y));
    yield* array;
  }

  thenBy<TKey>(keySelector: (item: TElement) => TKey, comparer?: IComparer<TKey>): OrderedEnumerable<TElement> {
    if (!comparer) {
      comparer = defaultComparerFactory(false);
    }
    return this.createOrderedEnumerable<TKey>(keySelector, comparer, false);
  }

  thenByDescending<TKey>(keySelector: (item: TElement) => TKey, comparer?: IComparer<TKey>): OrderedEnumerable<TElement> {
    if (!comparer) {
      comparer = defaultComparerFactory(false);
    }
    return this.createOrderedEnumerable<TKey>(keySelector, comparer, true);
  }

  toString() {
    return 'OrderedEnumerable';
  }
}
