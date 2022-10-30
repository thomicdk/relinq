import { Enumerable } from "../enumerable";

declare module '../enumerable' {
  interface Enumerable<TSource> {
    single(): TSource;
    single(predicate?: (item: TSource) => boolean): TSource;
  }
}

export function single<TSource>(this: Enumerable<TSource>): TSource
export function single<TSource>(this: Enumerable<TSource>, predicate?: (item: TSource) => boolean): TSource {
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
    if (!foundAny) {
      throw new Error("No items matched the predicate");
    }
    return result as TSource;
  } else {
    const iterator = this[Symbol.iterator]();
    const firstResult = iterator.next();
    if (!firstResult.done) {
      if (!iterator.next().done) {
        throw new Error("Sequence contained multiple elements");
      }
      return firstResult.value;
    }
    throw new Error("Sequence was empty");
  }
}

Enumerable.prototype.single = single;
