import { Enumerable } from "../enumerable";

declare module '../enumerable' {
  interface Enumerable<TSource> {
    elementAt(index: number): TSource;
  }
}

export function elementAt<TSource>(
  this: Enumerable<TSource>,
  index: number
): TSource {
  const [found, value] = tryElementAt(this, index);

  if (!found) {
    throw new Error("Index out of range");
  }

  return value;
}

Enumerable.prototype.elementAt = elementAt;

/** @internal */
export function tryElementAt<TSource>(
  source: Enumerable<TSource>,
  index: number
): [true, TSource] | [false, undefined] {
  if (index < 0) {
    throw new Error("Index out of range");
  }

  const iterator = source[Symbol.iterator]();
  let item;
  for (let i = -1; i < index; i++) {
    item = iterator.next();
    if (item.done !== false) {
      return [false, undefined];
    }
  }
  return [true, item!.value];
}
