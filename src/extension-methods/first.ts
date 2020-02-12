import { Enumerable } from "../enumerable";

declare module '../enumerable' {
  interface Enumerable<TSource> {
    first(predicate?: (item: TSource) => boolean): TSource;
  }
}

export function first<TSource>(this: Enumerable<TSource>, predicate?: (item: TSource) => boolean): TSource {
  if (predicate) {
    for (let item of this) {
      if (predicate(item)) {
        return item;
      }
    }
    throw new Error("No items matched the predicate");
  } else {
    const firstResult = this[Symbol.iterator]().next();
    if (!firstResult.done) {
      return firstResult.value;
    }
    throw new Error("Sequence was empty");
  }
}

Enumerable.prototype.first = first;
