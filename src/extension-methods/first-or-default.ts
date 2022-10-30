import { Enumerable } from "../enumerable";

declare module '../enumerable' {
  interface Enumerable<TSource> {
    firstOrDefault(): TSource | undefined;
    firstOrDefault(predicate?: (item: TSource) => boolean): TSource | undefined;
  }
}

export function firstOrDefault<TSource>(this: Enumerable<TSource>): TSource | undefined
export function firstOrDefault<TSource>(this: Enumerable<TSource>, predicate?: (item: TSource) => boolean): TSource | undefined {
  if (predicate) {
    for (let item of this) {
      if (predicate(item)) {
        return item;
      }
    }
  } else {
    const firstResult = this[Symbol.iterator]().next();
    if (!firstResult.done) {
      return firstResult.value;
    }
  }
  return undefined;
}

Enumerable.prototype.firstOrDefault = firstOrDefault;
