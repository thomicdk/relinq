import { Enumerable } from "../..";

describe("skip", function() {

  test('Negative count', () => {
    const numbers = Enumerable.range(0, 5).skip(-5);
    expect(numbers).toGenerate([0, 1, 2, 3, 4]);
  });

  test('Zero count', () => {
    const numbers = Enumerable.range(0, 5).skip(0);
    expect(numbers).toGenerate([0, 1, 2, 3, 4]);
  });

  test('Count shorter than source', () => {
    const numbers = Enumerable.range(0, 5).skip(3);
    expect(numbers).toGenerate([3, 4]);
  });

  test('Count equal to source', () => {
    const numbers = Enumerable.range(0, 5).skip(5);
    expect(numbers).toGenerate([]);
  });

  test('Count greater than source', () => {
    const numbers = Enumerable.range(0, 5).skip(10);
    expect(numbers).toGenerate([]);
  });

});

