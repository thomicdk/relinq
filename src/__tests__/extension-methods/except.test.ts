import { Enumerable } from "../..";

describe("except", function() {

  test('Empty first source', () => {
    const first = Enumerable.asEnumerable([] as number[]);
    const second = Enumerable.asEnumerable([2, 5, 9, 0, 5]);
    expect(first.except(second)).toGenerate([]);
  });

  test('Empty second source', () => {
    const first = Enumerable.asEnumerable([4, 0, 1, 0, 6]);
    const second = Enumerable.asEnumerable([] as number[]);
    expect(first.except(second)).toGenerate([4, 0, 1, 6]);
  });

  test('Empty two sources', () => {
    const first = Enumerable.asEnumerable([]);
    const second = Enumerable.asEnumerable([]);
    expect(first.except(second)).toGenerate([]);
  });

  test('Simple except', () => {
    const first = Enumerable.asEnumerable(["a", "b", "B", "c", "a"]);
    const second = Enumerable.asEnumerable(["a", "b", "c"]);
    expect(first.except(second)).toGenerate(["B"]);
  });

  test('Except no matches', () => {
    const first = Enumerable.asEnumerable([1, 2, 3]);
    const second = Enumerable.asEnumerable([4, 5, 6]);
    expect(first.except(second)).toGenerate([1, 2, 3]);
  });

});
