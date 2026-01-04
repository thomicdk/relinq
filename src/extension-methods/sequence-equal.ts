import { Enumerable } from "../enumerable";

declare module '../enumerable' {
  interface Enumerable<TSource> {
    sequenceEqual(this: Enumerable<TSource>, second: Enumerable<TSource>): boolean;
  }
}

export function sequenceEqual<TSource>(
  this: Enumerable<TSource>, 
  second: Enumerable<TSource>
): boolean {
  const iterator1 = this[Symbol.iterator]();
  const iterator2 = second[Symbol.iterator]();

  while (true) {
    const item1 = iterator1.next();
    const item2 = iterator2.next();

    if (item1.done !== item2.done) {
      return false;
    }
    if (item1.done !== false) {
      return true;
    }
    if (item1.value !== item2.value) {
      return false;
    }
  }
}

Enumerable.prototype.sequenceEqual = sequenceEqual;
