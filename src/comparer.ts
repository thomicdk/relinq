export interface IComparer<T> {
  compare(x: T, y: T): number
}

/** @internal */
export function defaultComparerFactory<TKey>(descending: boolean): IComparer<TKey> {
  return {
    compare(x: TKey, y: TKey) {
      if (x < y) {
        return descending ? 1 : -1;
      } else if (x > y) {
        return descending ? -1 : 1;
      } else {
        return 0;
      }
    }
  }
}

/** @internal */
export class ProjectionComparer<TElement, TKey> implements IComparer<TElement> {
  constructor (
    private readonly keySelector: (element: TElement) => TKey,
    private readonly  comparer: IComparer<TKey>) {
  }

  compare(x: TElement, y: TElement): number {
      const keyX = this.keySelector(x);
      const keyY = this.keySelector(y);
      return this.comparer.compare(keyX, keyY);
  }
}

/** @internal */
export class ReverseComparer<T> implements IComparer<T> {
  constructor(private readonly forwardComparer: IComparer<T>)
  { }

  compare(x: T, y: T): number {
      return this.forwardComparer.compare(y, x);
  }
}

/** @internal */
export class CompoundComparer<T> implements IComparer<T> {
  constructor(
    private readonly primary: IComparer<T>,
    private readonly secondary: IComparer<T>)
  { }

  compare(x: T, y: T): number {
      const primaryResult = this.primary.compare(x, y);
      if (primaryResult !== 0) {
          return primaryResult;
      }
      return this.secondary.compare(x, y);
  }
}
