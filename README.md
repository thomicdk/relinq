# RELINQ


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
