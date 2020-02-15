import { Enumerable } from '../enumerable';

declare module '../enumerable' {
  interface Enumerable<TSource> {
    reverse(): Enumerable<TSource>;
  }
}

export function reverse<TSource>(this: Enumerable<TSource>) {
  const self = this;
  return new Enumerable(function*() {
    const reversed = [...self].reverse();
    for (let item of reversed) {
      yield item;
    }
  });
}

Enumerable.prototype.reverse = reverse;
