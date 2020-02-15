import { Enumerable } from "../..";

describe("union", function() {

  test('Empty first source', () => {
    const first = Enumerable.asEnumerable([] as number[]);
    const second = Enumerable.asEnumerable([2, 5, 9, 0, 5]);
    expect(first.union(second)).toGenerate([2, 5, 9, 0]);
  });

  test('Empty second source', () => {
    const first = Enumerable.asEnumerable([4, 0, 1, 0, 6]);
    const second = Enumerable.asEnumerable([] as number[]);
    expect(first.union(second)).toGenerate([4, 0, 1, 6]);
  });

  test('Empty two sources', () => {
    const first = Enumerable.asEnumerable([]);
    const second = Enumerable.asEnumerable([]);
    expect(first.union(second)).toGenerate([]);
  });

  test('Simple union', () => {
    const first = Enumerable.asEnumerable(["a", "b", "B", "c"]);
    const second = Enumerable.asEnumerable(["b", "C", "B", "a"]);
    expect(first.union(second)).toGenerate(["a", "b", "B", "c", "C"]);
  });

});
