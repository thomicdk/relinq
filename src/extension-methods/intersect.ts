import { Enumerable } from "../enumerable";

declare module '../enumerable' {
  interface Enumerable<TSource> {
    intersect(second: Enumerable<TSource>): Enumerable<TSource>;
  }
}

export function intersect<TSource>(this: Enumerable<TSource>, second: Enumerable<TSource>): Enumerable<TSource> {
  const self = this;
  return new Enumerable(function*() {
    const potentialElements = new Set<TSource>(second);
    for (let item of self) {
      if (potentialElements.has(item)) {
        potentialElements.delete(item);
        yield item;
      }
    }
  });
}

Enumerable.prototype.intersect = intersect;
