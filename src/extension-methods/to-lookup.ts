import { Enumerable } from '../enumerable';
import { Lookup } from '../lookup';

declare module '../enumerable' {
  interface Enumerable<TSource> {
    toLookup<TKey, TElement>(keySelector: (item: TSource) => TKey): Lookup<TKey, TElement>;
    toLookup<TKey, TElement>(keySelector: (item: TSource) => TKey, elementSelector?: (item: TSource) => TElement): Lookup<TKey, TElement>;
  }
}

function defaultElementSelector<TSource>(item: TSource): TSource {
  return item;
}

export function toLookup<TSource, TKey, TElement>(this: Enumerable<TSource>, keySelector: (item: TSource) => TKey): Lookup<TKey, TElement>
export function toLookup<TSource, TKey, TElement>(this: Enumerable<TSource>, keySelector: (item: TSource) => TKey, elementSelector?: (item: TSource) => TElement): Lookup<TKey, TElement> {
  const lookup = new Lookup<TKey, TElement>();

  elementSelector = <(item: TSource) => TElement>(elementSelector || defaultElementSelector);

  for (let item of this) {
    const key = keySelector(item);
    const element = elementSelector(item);
    lookup.add(key, element);
  }
  return lookup;
}

Enumerable.prototype.toLookup = toLookup;
