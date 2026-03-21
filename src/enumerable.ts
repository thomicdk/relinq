export class Enumerable<TSource> implements Iterable<TSource>
{

  /** @internal */
  get length() {
    return this.isArray()
      ? this.source.length
      : -1
  }

  /** @internal */
  isArray(): this is { source: Array<TSource> } {
    return Array.isArray(this.source);
  }

  /** @internal */
  constructor(
    /** @internal */
    public readonly source: Iterable<TSource> | (() => Generator<TSource>)
  ) { }

  *[Symbol.iterator]() {
    const iterable = typeof this.source === "function"
      ? this.source()
      : this.source;

    yield* iterable;
  }

  /** @internal */
  toJSON() {
    return [...this];
  }

  toString() {
    return 'Enumerable';
  }

  static from<TSource>(source: Iterable<TSource> | (() => Generator<TSource>)): Enumerable<TSource> {
    return new Enumerable<TSource>(source);
  }

  static empty<TSource>(): Enumerable<TSource> {
    return new Enumerable([]);
  }

  static infiniteSequence(start: number, step: number): Enumerable<number> {
    return new Enumerable(function*() {
      let current = start;
      while (true) {
        yield current;
        current += step;
      }
    });
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
