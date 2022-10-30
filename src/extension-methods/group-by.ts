import { Enumerable } from '../enumerable';
import { Grouping } from '../grouping';

declare module '../enumerable' {
  interface Enumerable<TSource> {
    groupBy<TKey, TElement>(keySelector: (item: TSource) => TKey): Enumerable<Grouping<TKey, TElement>>;
    groupBy<TKey, TElement>(keySelector: (item: TSource) => TKey, elementSelector?: (item: TSource) => TElement): Enumerable<Grouping<TKey, TElement>>;
  }
}

export function groupBy<TSource, TKey, TElement>(this: Enumerable<TSource>, keySelector: (item: TSource) => TKey): Enumerable<Grouping<TKey, TElement>>
export function groupBy<TSource, TKey, TElement>(this: Enumerable<TSource>, keySelector: (item: TSource) => TKey, elementSelector?: (item: TSource) => TElement): Enumerable<Grouping<TKey, TElement>> {
  const lookup = this.toLookup(keySelector, elementSelector);
  const result = new Enumerable(function*() {
    for (let result of lookup) {
      yield result;
    }
  });
  return result;
}

Enumerable.prototype.groupBy = groupBy;
