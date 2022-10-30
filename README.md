# RELINQ

## Feature highlights

* Familiar LINQ API 
* Full type support
* No dependencies
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
* `.first()`
* `.firstOrDefault()`
* `.groupBy()`
* `.intersect()`
* `.last()`
* `.lastOrDefault()`
* `.max()`
* `.min()`
* `.orderBy()`
* `.reverse()`
* `.select()`
* `.selectMany()`
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

### Static

* `Enumerable.empty()`
* `Enumerable.from()`
* `Enumerable.range()`
* `Enumerable.repeat()`
