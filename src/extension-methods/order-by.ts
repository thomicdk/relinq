import { Enumerable } from "../enumerable";
import { OrderedEnumerable } from "../ordered-enumerable";
import { createDeferredIterable } from "../deferred-iterable";
import { IComparer, defaultComparerFactory, ProjectionComparer, ReverseComparer } from "../comparer";

declare module '../enumerable' {
  interface Enumerable<TSource> {
    orderBy<TKey>(keySelector: (item: TSource) => TKey, comparer?: IComparer<TKey>): OrderedEnumerable<TSource>;
    orderByDescending<TKey>(keySelector: (item: TSource) => TKey, comparer?: IComparer<TKey>): OrderedEnumerable<TSource>;
  }
}

export function orderBy<TSource, TKey>(this: Enumerable<TSource>, keySelector: (item: TSource) => TKey, comparer?: IComparer<TKey>): OrderedEnumerable<TSource> {
  if (keySelector == null) {
    throw new Error("keySelector is null");
  }

  if (!comparer) {
    comparer = defaultComparerFactory(false);
  }
  const orderedEnumerable = new OrderedEnumerable<TSource>(createDeferredIterable(this), new ProjectionComparer<TSource, TKey>(keySelector, comparer));
  return orderedEnumerable;
}

export function orderByDescending<TSource, TKey>(this: Enumerable<TSource>, keySelector: (item: TSource) => TKey, comparer?: IComparer<TKey>): OrderedEnumerable<TSource> {
  if (keySelector == null) {
    throw new Error("keySelector is null");
  }

  if (!comparer) {
    comparer = defaultComparerFactory(false);
  }
  const sourceComparer = new ReverseComparer(comparer);
  const orderedEnumerable =  new OrderedEnumerable<TSource>(createDeferredIterable(this), new ProjectionComparer<TSource, TKey>(keySelector, sourceComparer));
  return orderedEnumerable;
}

Enumerable.prototype.orderBy = orderBy;
Enumerable.prototype.orderByDescending = orderByDescending;
