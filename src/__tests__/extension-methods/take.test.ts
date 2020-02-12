import { Enumerable } from "../..";

describe("take", function() {

  test('Negative count', () => {
    const numbers = Enumerable.range(0, 5).take(-5);
    expect(numbers).toGenerate([]);
  });

  test('Zero count', () => {
    const numbers = Enumerable.range(0, 5).take(0);
    expect(numbers).toGenerate([]);
  });

  test('Count shorter than source', () => {
    const numbers = Enumerable.range(0, 5).take(3);
    expect(numbers).toGenerate([0, 1, 2]);
  });

  test('Count equal to source', () => {
    const numbers = Enumerable.range(0, 5).take(5);
    expect(numbers).toGenerate([0, 1, 2, 3, 4]);
  });

  test('Count greater than source', () => {
    const numbers = Enumerable.range(0, 5).take(10);
    expect(numbers).toGenerate([0, 1, 2, 3, 4]);
  });

  test('Lazy iteration', () => {
    const source = Enumerable.asEnumerable([{ val: 1 }, { val: 2 }, <any>undefined])

    // If we proceed too far, we get:
    // TypeError: Cannot read property 'val' of undefined
    const query = source.select(x => x.val);
    expect(query.take(2)).toGenerate([1, 2]);
  });
});

