import { Enumerable } from '../enumerable';

declare module '../enumerable' {
  interface Enumerable<TSource> {
    select<TResult>(selector: (item: TSource, idx: number) => TResult): Enumerable<TResult>;
  }
}

export function select<TSource, TResult>(this: Enumerable<TSource>, selector: (item: TSource, idx: number) => TResult) {
  const self = this;
  return new Enumerable(function*() {
    let index = 0;
    for (let item of self) {
      yield selector(item, index++);
    }
  });
}

Enumerable.prototype.select = select;
