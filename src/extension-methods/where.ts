import { Enumerable } from "../enumerable";

declare module '../enumerable' {
  interface Enumerable<TSource> {
    where(predicate: (item: TSource, idx: number) => boolean): Enumerable<TSource>;
  }
}

export function where<TSource>(this: Enumerable<TSource>, predicate: (item: TSource, idx: number) => boolean): Enumerable<TSource> {
  const self = this;

  return new Enumerable(function*() {
    let index = 0;
    for (let item of self) {
      if (predicate(item, index)) {
        yield item;
      }
      index++;
    }
  });
}

Enumerable.prototype.where = where;
