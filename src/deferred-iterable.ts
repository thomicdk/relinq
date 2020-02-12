/** @internal */
export type DeferredIterable<TSource> = () => IterableIterator<TSource>;

/** @internal */
export function createDeferredIterable<TSource>(source: Iterable<TSource>): DeferredIterable<TSource> {
  return function*() {
    for (let item of source) {
      yield item;
    }
  }
}
