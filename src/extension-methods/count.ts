import { Enumerable } from "../enumerable";

declare module '../enumerable' {
  interface Enumerable<TSource> {
    count(): number;
    count(predicate: (item: TSource) => boolean): number;
  }
}

export function count<TSource>(
  this: Enumerable<TSource>
): number;

export function count<TSource>(
  this: Enumerable<TSource>,
  predicate: (item: TSource) => boolean
): number;

export function count<TSource>(
  this: Enumerable<TSource>,
  predicate?: (item: TSource) => boolean
): number {
  if (!predicate && this.length >= 0) {
    return this.length;
  }

  let count = 0;
  for (let item of this) {
    if (predicate === undefined || predicate(item)) {
      count++;
    }
  }
  return count;
}

Enumerable.prototype.count = count;
