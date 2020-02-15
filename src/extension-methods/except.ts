import { Enumerable } from "../enumerable";

declare module '../enumerable' {
  interface Enumerable<TSource> {
    except(second: Enumerable<TSource>): Enumerable<TSource>;
  }
}

export function except<TSource>(this: Enumerable<TSource>, second: Enumerable<TSource>): Enumerable<TSource> {
  const self = this;
  return new Enumerable(function*() {
    const bannedElements = new Set<TSource>(second);
    for (let item of self) {
      if (!bannedElements.has(item)) {
        bannedElements.add(item);
        yield item;
      }
    }
  });
}

Enumerable.prototype.except = except;
