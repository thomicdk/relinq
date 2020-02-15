import { Enumerable } from "../..";

describe("intersect", function() {

  test('Empty first source', () => {
    const first = Enumerable.asEnumerable([] as number[]);
    const second = Enumerable.asEnumerable([2, 5, 9, 0, 5]);
    expect(first.intersect(second)).toGenerate([]);
  });

  test('Empty second source', () => {
    const first = Enumerable.asEnumerable([4, 0, 1, 0, 6]);
    const second = Enumerable.asEnumerable([] as number[]);
    expect(first.intersect(second)).toGenerate([]);
  });

  test('Empty two sources', () => {
    const first = Enumerable.asEnumerable([]);
    const second = Enumerable.asEnumerable([]);
    expect(first.intersect(second)).toGenerate([]);
  });

  test('Simple intersection', () => {
    const first = Enumerable.asEnumerable(["a", "b", "B", "c", "a"]);
    const second = Enumerable.asEnumerable(["b", "C", "B", "a", "a"]);
    expect(first.intersect(second)).toGenerate(["a", "b", "B"]);
  });

  test('Intersection no matches', () => {
    const first = Enumerable.asEnumerable([1, 2, 3]);
    const second = Enumerable.asEnumerable([4, 5, 6]);
    expect(first.intersect(second)).toGenerate([]);
  });

});
