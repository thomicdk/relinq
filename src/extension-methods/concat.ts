import { Enumerable } from "../enumerable";

declare module '../enumerable' {
  interface Enumerable<TSource> {
    concat<TSource>(second: Enumerable<TSource>): Enumerable<TSource>;
  }
}

export function concat<TSource>(this: Enumerable<TSource>, second: Enumerable<TSource>): Enumerable<TSource> {
  let self: Enumerable<TSource> | null = this;
  return new Enumerable(function*() {
    for (let item of self!) {
      yield item;
    }
    self = null;
    for (let item of second) {
      yield item;
    }
  });
}

Enumerable.prototype.concat = concat;
