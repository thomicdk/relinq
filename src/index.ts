import { Enumerable } from './enumerable';

import './extension-methods/all';
import './extension-methods/any';
import './extension-methods/count';
import './extension-methods/distinct';
import './extension-methods/first';
import './extension-methods/first-or-default';
import './extension-methods/group-by';
import './extension-methods/last';
import './extension-methods/last-or-default';
import './extension-methods/order-by';
import './extension-methods/select';
import './extension-methods/single';
import './extension-methods/single-or-default';
import './extension-methods/take';
import './extension-methods/to-array';
import './extension-methods/to-lookup';
import './extension-methods/where';

export { Enumerable };

export default function<TSource>(source: Iterable<TSource>) {
  return Enumerable.asEnumerable(source);
}
