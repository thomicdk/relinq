import { Enumerable } from "../enumerable";

declare module '../enumerable' {
  interface Enumerable<TSource> {
    singleOrDefault(predicate?: (item: TSource) => boolean): TSource | undefined;
  }
}

export function singleOrDefault<TSource>(this: Enumerable<TSource>, predicate?: (item: TSource) => boolean): TSource | undefined {
  if (predicate) {
    let foundAny = false;
    let result: TSource | undefined = undefined;
    for (let item of this) {
      if (predicate(item)) {
        if (foundAny) {
          throw new Error("Sequence contained multiple matching elements");
        }
        foundAny = true;
        result = item;
      }
    }
    return result;
  } else {
    const iterator = this[Symbol.iterator]();
    const firstResult = iterator.next();
    if (!firstResult.done) {
      if (!iterator.next().done) {
        throw new Error("Sequence contained multiple elements");
      }
      return firstResult.value;
    }
    return undefined;
  }
}

Enumerable.prototype.singleOrDefault = singleOrDefault;
