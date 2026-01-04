# RELINQ

## Feature highlights

* Familiar API from C# LINQ
* Full type support
* No runtime dependencies
* Deferred execution

## How to use

```javascript
const { Enumerable } = require('relinq');

const people = [
  { name: 'John', age: 32, married: true },
  { name: 'Vera', age: 21, married: false },
  { name: 'Marie', age: 39, married: false },
  { name: 'Bob', age: 45, married: true },
  { name: 'Glen', age: 28, married: true },
  { name: 'Rick', age: 18, married: false },
];

Enumerable
  .from(people)
  .where(p => p.age < 40)
  .orderBy(p => p.married)
  .thenByDescending(p => p.age);
```

## API

### Methods

* `.aggregate()`
* `.all()`
* `.any()`
* `.concat()`
* `.count()`
* `.distinct()`
* `.except()`
* `.elementAt()`
* `.elementAtOrDefault()`
* `.first()`
* `.firstOrDefault()`
* `.groupBy()`
* `.intersect()`
* `.last()`
* `.lastOrDefault()`
* `.max()`
* `.min()`
* `.orderBy()`
* `.orderByDescending()`
* `.reverse()`
* `.select()`
* `.selectMany()`
* `.sequenceEqual()`
* `.single()`
* `.singleOrDefault()`
* `.skip()`
* `.skipWhile()`
* `.sum()`
* `.take()`
* `.takeWhile()`
* `.toArray()`
* `.toDictionary()`
* `.toLookup()`
* `.union()`
* `.where()`
* `.zip()`

### Static

* `Enumerable.empty()`
* `Enumerable.from()`
* `Enumerable.range()`
* `Enumerable.repeat()`


## Roadmap

*Updated January 2026*

* Implement missing methods from .NET 10 ([`System.Linq.Enumerable`](https://learn.microsoft.com/en-us/dotnet/api/system.linq.enumerable?view=net-10.0#methods)):

  * AggregateBy
  * Append
  * Average
  * Chunk
  * Contains
  * CountBy
  * DistinctBy
  * ExceptBy
  * GroupJoin
  * Index
  * InfiniteSequence
  * IntersectBy
  * Join
  * LeftJoin
  * MaxBy
  * MinBy
  * Order
  * OrderDescending
  * Prepend
  * RightJoin
  * Sequence
  * Shuffle
  * SkipLast
  * ToHashSet
  * UnionBy
* Implement custom HashSet class with `IEqualityComparer<T>`-like support, which will enable new overloads for various LINQ methods to allow a custom comparer to be passed as argument. 
* Expand `DeferredIterable` beyond a simple function: It should be aware of the type of iterable it's holding. That will allow optimizations for Arrays where the `length` property can be used to optimize various LINQ methods, e.g. `.count()` and `.elementAt()`.
* CI/CD pipeline with Github Actions
