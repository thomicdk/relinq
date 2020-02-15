import { Enumerable } from "../enumerable";

declare module '../enumerable' {
  interface Enumerable<TSource> {
    selectMany<TCollection, TResult>(collectionSelector: (item: TSource, idx: number) => Iterable<TCollection>, resultSelector: (item: TSource, subsequenceElement: TCollection, idx: number) => TResult): Enumerable<TResult>;
  }
}

export function selectMany<TSource, TCollection, TResult>(
  this: Enumerable<TSource>,
  collectionSelector: (item: TSource, idx: number) => Iterable<TCollection>,
  resultSelector: (item: TSource, subsequenceElement: TCollection, idx: number) => TResult
): Enumerable<TResult> {
    const self = this;
    return new Enumerable(function*() {
      let index = 0;
      for (let item of self) {
        for (let collectionItem of collectionSelector(item, index++)) {
          yield resultSelector(item, collectionItem, index);
        }
      }
    });
}

Enumerable.prototype.selectMany = selectMany;
