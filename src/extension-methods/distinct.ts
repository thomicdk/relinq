import { Enumerable } from "../enumerable";

declare module '../enumerable' {
  interface Enumerable<TSource> {
    distinct(): Enumerable<TSource>;
  }
}

export function distinct<TSource>(this: Enumerable<TSource>): Enumerable<TSource> {
  const self = this;
  return new Enumerable(function*() {
    const seenElements = new Set<TSource>();
    for (let item of self) {
      if (!seenElements.has(item)) {
        seenElements.add(item);
        yield item;
      }
    }
  });
}

Enumerable.prototype.distinct = distinct;
