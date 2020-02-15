import { Enumerable } from '../enumerable';

declare module '../enumerable' {
  interface Enumerable<TSource> {
    takeWhile(predicate: (item: TSource, idx?: number) => boolean): Enumerable<TSource>;
  }
}

export function takeWhile<TSource>(this: Enumerable<TSource>, predicate: (item: TSource, idx?: number) => boolean): Enumerable<TSource> {
  const self = this;
  return new Enumerable(function*() {
    let index = 0;
    for (let item of self) {
      if (!predicate(item, index)) {
        break;
      }
      index++;
      yield item;
    }
  });
}

Enumerable.prototype.takeWhile = takeWhile;
