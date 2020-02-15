import { Enumerable } from "../enumerable";
import { Dictionary } from "../dictionary";

declare module '../enumerable' {
  interface Enumerable<TSource> {
    toDictionary<TKey, TElement>(keySelector: (item: TSource) => TKey, elementSelector?: (item: TSource) => TElement): Dictionary<TKey, TElement>;
  }
}

function defaultElementSelector<TSource>(item: TSource): TSource {
  return item;
}

export function toDictionary<TSource, TKey, TElement>(this: Enumerable<TSource>, keySelector: (item: TSource) => TKey, elementSelector?: (item: TSource) => TElement): Dictionary<TKey, TElement> {
  const dict = new Dictionary<TKey, TElement>();

  elementSelector = <(item: TSource) => TElement>(elementSelector || defaultElementSelector);

  for (let item of this) {
    const key = keySelector(item);
    if (dict.has(key)) {
       throw new Error("Key already exists in dictionary");
    }
    const element = elementSelector(item);
    dict.set(key, element);
  }
  return dict;
}

Enumerable.prototype.toDictionary = toDictionary;
