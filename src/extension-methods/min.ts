import { Enumerable } from "../enumerable";

declare module '../enumerable' {
  interface Enumerable<TSource> {
    min(): TSource;
    min<TResult>(selector?: (item: TSource) => TResult): TResult;
  }
}

export function min<TSource>(this: Enumerable<TSource>): number
export function min<TSource, TResult>(this: Enumerable<TSource>, selector?: (item: TSource) => TResult): TResult {
  if (!selector) {
    selector = (item: any) => item;
  }
  let isEmpty = true;
  const iterator = this[Symbol.iterator]();
  let result: IteratorResult<TSource, any> = iterator.next();
  let min = selector(result.value);
  while (!result.done) {
    isEmpty = false;
    const value = selector(result.value);
    if (value < min) {
      min = value;
    }
    result = iterator.next();
  }

  if (isEmpty) {
    throw new Error("Sequence is empty");
  }
  return min;
}

Enumerable.prototype.min = min;
