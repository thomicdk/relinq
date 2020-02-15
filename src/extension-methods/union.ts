import { Enumerable } from "../enumerable";

declare module '../enumerable' {
  interface Enumerable<TSource> {
    union(second: Enumerable<TSource>): Enumerable<TSource>;
  }
}

export function union<TSource>(this: Enumerable<TSource>, second: Enumerable<TSource>): Enumerable<TSource> {
  const self = this;
  return new Enumerable(function*() {
    const seenElements = new Set<TSource>();
    for (let item of self) {
      if (!seenElements.has(item)) {
        seenElements.add(item);
        yield item;
      }
    }
    for (let item of second) {
      if (!seenElements.has(item)) {
        seenElements.add(item);
        yield item;
      }
    }
  });
}

Enumerable.prototype.union = union;
