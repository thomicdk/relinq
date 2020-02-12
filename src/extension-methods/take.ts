import { Enumerable } from '../enumerable';

declare module '../enumerable' {
  interface Enumerable<TSource> {
    take(count: number): Enumerable<TSource>;
  }
}

export function take<TSource>(this: Enumerable<TSource>, count: number): Enumerable<TSource> {
  const self = this;
  return new Enumerable(function*() {
    let i = 0;
    let current: IteratorResult<TSource>;
    const iterator = self[Symbol.iterator]();
    while (i++ < count && (current = iterator.next()).done === false) {
      yield current.value;
    }
  });
}

Enumerable.prototype.take = take;
