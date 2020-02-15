import { Enumerable } from "../enumerable";

declare module '../enumerable' {
  interface Enumerable<TSource> {
    skip(count: number): Enumerable<TSource>;
  }
}

export function skip<TSource>(this: Enumerable<TSource>, count: number): Enumerable<TSource> {
  const self = this;
  return <any>new Enumerable(function*() {
    const iterator = self[Symbol.iterator]();
    let current: IteratorResult<TSource> = iterator.next();

    for (let i = 0; i < count; i++) {
      current = iterator.next();
    }
    while (current.done === false) {
      yield current.value;
      current = iterator.next();
    }
  });
}

Enumerable.prototype.skip = skip;
