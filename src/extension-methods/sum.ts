import { Enumerable } from "../enumerable";

declare module '../enumerable' {
  interface Enumerable<TSource> {
    sum(selector?: (item: TSource) => number): number;
  }
}

export function sum<TSource>(this: Enumerable<TSource>, selector?: (item: TSource) => number): number {
  if (!selector) {
    selector = (item: any) => item;
  }

  let sum = 0;
  for (let item of this) {
      sum += selector(item);
  }
  return sum;
}

Enumerable.prototype.sum = sum;
