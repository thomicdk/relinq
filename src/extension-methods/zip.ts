import { Enumerable } from "../enumerable";

declare module '../enumerable' {
  interface Enumerable<TSource> {
    zip<TSecond, TResult>(second: Enumerable<TSecond>, resultSelector: (first: TSource, second: TSecond) => TResult): Enumerable<TResult>;
  }
}

export function zip<TSource, TSecond, TResult>(
  this: Enumerable<TSource>, 
  second: Enumerable<TSecond>, 
  resultSelector: (first: TSource, second: TSecond) => TResult
): Enumerable<TResult> {
  const self = this;

  return new Enumerable(function*() {
    const iterator1 = self[Symbol.iterator]();
    const iterator2 = second[Symbol.iterator]();

    let item1, item2;

    while ((item1 = iterator1.next()).done === false && 
           (item2 = iterator2.next()).done === false) {
      yield resultSelector(item1.value, item2.value);
    }
  });
}

Enumerable.prototype.zip = zip;
