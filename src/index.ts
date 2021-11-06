import { Enumerable } from './enumerable';
import './extension-methods';

export { Enumerable };

export default function<TSource>(source: Iterable<TSource>) {
  return Enumerable.from(source);
}
