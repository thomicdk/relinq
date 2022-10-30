import { Enumerable } from "../enumerable";

declare module '../enumerable' {
  interface Enumerable<TSource> {
    any(): boolean;
    any(predicate?: (item: TSource) => boolean): boolean;
  }
}

export function any<TSource>(this: Enumerable<TSource>): boolean
export function any<TSource>(this: Enumerable<TSource>, predicate?: (item: TSource) => boolean): boolean {
  if (predicate !== undefined) {
    for (let item of this) {
      if (predicate(item)) {
        return true;
      }
    }
    return false;
  } else {
    return !this[Symbol.iterator]().next().done;
  }
}

Enumerable.prototype.any = any;
