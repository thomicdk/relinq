import { Enumerable } from "../enumerable";

declare module '../enumerable' {
  interface Enumerable<TSource> {
    selectMany<TResult>(collectionSelector: (item: TSource) => Iterable<TResult>): Enumerable<TResult>;
    selectMany<TResult>(collectionSelector: (item: TSource, idx: number) => Iterable<TResult>): Enumerable<TResult>;
    selectMany<TCollection, TResult>(collectionSelector: (item: TSource) => Iterable<TCollection>, resultSelector: (item: TSource, subsequenceElement: TCollection) => TResult): Enumerable<TResult>;
    selectMany<TCollection, TResult>(collectionSelector: (item: TSource, idx: number) => Iterable<TCollection>, resultSelector: (item: TSource, subsequenceElement: TCollection) => TResult): Enumerable<TResult>;
  }
}

export function selectMany<TSource, TResult>(
  this: Enumerable<TSource>, 
  collectionSelector: (item: TSource) => Iterable<TResult>
): Enumerable<TResult>;

export function selectMany<TSource, TResult>(
  this: Enumerable<TSource>, 
  collectionSelector: (item: TSource, idx: number) => Iterable<TResult>
): Enumerable<TResult>;

export function selectMany<TSource, TCollection, TResult>(
  this: Enumerable<TSource>,
  collectionSelector: (item: TSource) => Iterable<TCollection>,
  resultSelector: (item: TSource, subsequenceElement: TCollection) => TResult
): Enumerable<TResult>;

export function selectMany<TSource, TCollection, TResult>(
  this: Enumerable<TSource>,
  collectionSelector: (item: TSource, idx: number) => Iterable<TCollection>,
  resultSelector: (item: TSource, subsequenceElement: TCollection) => TResult
): Enumerable<TResult>;

export function selectMany<TSource, TCollection, TResult>(
  this: Enumerable<TSource>,
  collectionSelector: (item: TSource, idx: number) => Iterable<TCollection>,
  resultSelector?: (item: TSource, subsequenceElement: TCollection) => TResult
): Enumerable<TResult | TCollection> {
    const self = this;

    if (resultSelector) {
      return new Enumerable(function*() {
        let index = 0;
        for (let item of self) {
          for (let collectionItem of collectionSelector(item, index++)) {
            yield resultSelector(item, collectionItem);
          }
        }
      });
    } else {
      return new Enumerable(function*() {
        let index = 0;
        for (let item of self) {
          for (let collectionItem of collectionSelector(item, index++)) {
            yield collectionItem;
          }
        }
      });
    }
}

Enumerable.prototype.selectMany = selectMany;