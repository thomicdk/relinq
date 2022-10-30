import { Enumerable } from "../enumerable";

declare module '../enumerable' {
  interface Enumerable<TSource> {
    lastOrDefault(): TSource | undefined;
    lastOrDefault(predicate?: (item: TSource) => boolean): TSource | undefined;
  }
}

export function lastOrDefault<TSource>(this: Enumerable<TSource>): TSource | undefined
export function lastOrDefault<TSource>(this: Enumerable<TSource>, predicate?: (item: TSource) => boolean): TSource | undefined {
  if (predicate) {
    let result: TSource | undefined = undefined;
    for (let item of this) {
      if (predicate(item)) {
        result = item;
      }
    }
    return result;
  } else {
    let last: TSource | undefined;
    for (last of this) { }
    return last;
  }
}

Enumerable.prototype.lastOrDefault = lastOrDefault;
