import { Enumerable } from '../enumerable';

declare module '../enumerable' {
  interface Enumerable<TSource> {
    skipWhile(predicate: (item: TSource, idx?: number) => boolean): Enumerable<TSource>;
  }
}

export function skipWhile<TSource>(this: Enumerable<TSource>, predicate: (item: TSource, idx?: number) => boolean) {
  const self = this;
  return new Enumerable(function*() {
    const iterator = self[Symbol.iterator]();
    let index = 0;
    let current: IteratorResult<TSource> = iterator.next();
    while (current.done === false) {
      if (!predicate(current.value, index)) {
          break;
      }
      current = iterator.next();
      index++;
    }

    while (current.done === false) {
      yield current.value;
      current = iterator.next();
    }
  });
}

Enumerable.prototype.skipWhile = skipWhile;
