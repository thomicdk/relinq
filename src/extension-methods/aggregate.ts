import { Enumerable } from "../enumerable";

declare module '../enumerable' {
  interface Enumerable<TSource> {
    aggregate<TAccumulate, TResult>(seed: TAccumulate, func: (accumulate: TAccumulate, item: TSource) => TAccumulate, resultSelector?: (accumulate: TAccumulate) => TResult): TResult;
  }
}

function defaultResultSelector<TSource>(item: TSource): TSource {
  return item;
}

export function aggregate<TSource, TAccumulate, TResult>(
  this: Enumerable<TSource>,
  seed: TAccumulate,
  func: (accumulate: TAccumulate, item: TSource) => TAccumulate,
  resultSelector?: (accumulate: TAccumulate) => TResult)
  : TResult {

    resultSelector = <(accumulate: TAccumulate) => TResult>(resultSelector || defaultResultSelector);

    let current = seed;
    for (let item of this) {
        current = func(current, item);
    }
    return resultSelector(current);
}

Enumerable.prototype.aggregate = aggregate;
