import { Enumerable } from "../enumerable";

declare module '../enumerable' {
  interface Enumerable<TSource> {
    all(predicate: (item: TSource) => boolean): boolean;
  }
}

export function all<TSource>(this: Enumerable<TSource>, predicate: (item: TSource) => boolean): boolean {
  for (let item of this) {
    if (!predicate(item)) {
      return false;
    }
  }
  return true;
}

Enumerable.prototype.all = all;
