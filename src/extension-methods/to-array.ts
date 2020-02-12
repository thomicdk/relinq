import { Enumerable } from "../enumerable";

declare module '../enumerable' {
  interface Enumerable<TSource> {
    toArray(): TSource[];
  }
}

export function toArray<TSource>(this: Enumerable<TSource>): TSource[] {
  return [...this];
}

Enumerable.prototype.toArray = toArray;
