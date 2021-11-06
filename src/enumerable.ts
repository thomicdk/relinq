import { createDeferredIterable, DeferredIterable } from "./deferred-iterable";

export class Enumerable<TSource> implements Iterable<TSource>
{
  /** @internal */
  constructor(
    /** @internal */
    protected readonly deferredIterable: DeferredIterable<TSource>
  ) { }

  [Symbol.iterator](): IterableIterator<TSource> {
    return this.deferredIterable();
  }

  /** @internal */
  toJSON() {
    return [...this.deferredIterable()];
  }

  toString() {
    return 'Enumerable';
  }

  static from<T>(source: Iterable<T>): Enumerable<T> {
    const deferredIterable = createDeferredIterable(source);
    return new Enumerable<T>(deferredIterable);
  }

  static empty<TSource>(): Enumerable<TSource> {
    return new Enumerable(function*() { });
  }

  static range(start: number, count: number): Enumerable<number> {
    return new Enumerable(function*() {
      for (let i = 0; i < count; i++) {
        yield start + i;
      }
    });
  }

  static repeat<TResult>(element: TResult, count: number): Enumerable<TResult> {
    return new Enumerable(function*() {
      for (let i = 0; i < count; i++) {
        yield element;
      }
    });
  }
}
