import { Enumerable } from "../enumerable";
import { tryElementAt } from "./element-at";

declare module '../enumerable' {
  interface Enumerable<TSource> {
    elementAtOrDefault(index: number): TSource | undefined;
  }
}

export function elementAtOrDefault<TSource>(
  this: Enumerable<TSource>,
  index: number
): TSource | undefined {
  const [, value] = tryElementAt(this, index);
  return value;
}

Enumerable.prototype.elementAtOrDefault = elementAtOrDefault;
