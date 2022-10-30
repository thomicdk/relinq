import { Enumerable } from "../enumerable";

declare module '../enumerable' {
  interface Enumerable<TSource> {
    last(): TSource;
    last(predicate?: (item: TSource) => boolean): TSource;
  }
}

export function last<TSource>(this: Enumerable<TSource>): TSource
export function last<TSource>(this: Enumerable<TSource>, predicate?: (item: TSource) => boolean): TSource {
  if (predicate) {
    let result: TSource;
    let found = false;
    for (let item of this) {
      if (predicate(item)) {
        result = item;
        found = true;
      }
    }
    if (!found) {
      throw new Error("No items matched the predicate");
    }
    return result!;
  } else {
    let found = false;
    let last: TSource;
    for (last of this) {
      found = true;
    }
    if (!found) {
      throw new Error("Sequence was empty");
    }
    return last!;
  }
}

Enumerable.prototype.last = last;
