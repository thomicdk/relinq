import { Enumerable } from "../enumerable";

declare module '../enumerable' {
  interface Enumerable<TSource> {
    aggregate(func: (accumulate: TSource, item: TSource) => TSource): TSource;
    aggregate<TAccumulate>(seed: TAccumulate, func: (accumulate: TAccumulate, item: TSource) => TAccumulate): TAccumulate;
    aggregate<TAccumulate, TResult>(seed: TAccumulate, func: (accumulate: TAccumulate, item: TSource) => TAccumulate, resultSelector: (accumulate: TAccumulate) => TResult): TResult;
  }
}

export function aggregate<TSource>(
  this: Enumerable<TSource>, 
  func: (accumulate: TSource, item: TSource) => TSource
): TSource;

export function aggregate<TSource, TAccumulate>(
  this: Enumerable<TSource>, 
  seed: TAccumulate, 
  func: (accumulate: TAccumulate, item: TSource) => TAccumulate
): TAccumulate;

export function aggregate<TSource, TAccumulate, TResult>(
  this: Enumerable<TSource>,
  seed: TAccumulate,
  func: (accumulate: TAccumulate, item: TSource) => TAccumulate,
  resultSelector: (accumulate: TAccumulate) => TResult
): TResult;

export function aggregate<TSource, TAccumulate, TResult>(
  this: Enumerable<TSource>,
  funcOrSeed: TAccumulate | ((accumulate: TSource, item: TSource) => TSource),
  func?: (accumulate: TAccumulate, item: TSource) => TAccumulate,
  resultSelector?: (accumulate: TAccumulate) => TResult
): TSource | TAccumulate | TResult {

  // First overload: no seed
  if (func === undefined) {
    const iterator = this[Symbol.iterator]();
    let item = iterator.next();

    if (item.done) {
      throw new Error('Sequence contains no elements');
    }
  
    let current = item.value;
    while ((item = iterator.next()).done === false) {
      current = (funcOrSeed as (accumulate: TSource, item: TSource) => TSource)(current, item.value);
    }
    return current;
  }
  
  // Second and third overload: with seed
  const seed = funcOrSeed as TAccumulate;
  let current = seed;
  
  for (let item of this) {
    current = func(current, item);
  }
  
  if (resultSelector) {
    return resultSelector(current);
  }
  
  return current as TAccumulate;
}

Enumerable.prototype.aggregate = aggregate;
