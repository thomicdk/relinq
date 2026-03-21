import { Enumerable } from "../enumerable";

declare module '../enumerable' {
  interface Enumerable<TSource> {
    average(): number;
    average(selector: (item: TSource) => number): number;
  }
}

export function average<TSource extends number>(
  this: Enumerable<TSource>
): number;

export function average<TSource>(
  this: Enumerable<TSource>,
  selector: (item: TSource) => number
): number;

export function average<TSource>(
  this: Enumerable<TSource>,
  selector?: (item: TSource) => number
): number {
  if (!selector) {
    selector = (item) => item as unknown as number;
  }

  let sum = 0;
  let count = 0;
  for (const item of this) {
    sum += selector(item);
    count++;
  }

  if (count === 0) {
    throw new Error("Sequence is empty");
  }

  return sum / count;
}

Enumerable.prototype.average = average;
