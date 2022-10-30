import { Enumerable } from "../..";

describe("union", function() {

  test('Empty first source', () => {
    const first = Enumerable.from([]);
    const second = Enumerable.from([2, 5, 9, 0, 5]);
    expect(first.union(second)).toGenerate([2, 5, 9, 0]);
  });

  test('Empty second source', () => {
    const first = Enumerable.from([4, 0, 1, 0, 6]);
    const second = Enumerable.from([]);
    expect(first.union(second)).toGenerate([4, 0, 1, 6]);
  });

  test('Empty two sources', () => {
    const first = Enumerable.from([]);
    const second = Enumerable.from([]);
    expect(first.union(second)).toGenerate([]);
  });

  test('Simple union', () => {
    const first = Enumerable.from(["a", "b", "B", "c"]);
    const second = Enumerable.from(["b", "C", "B", "a"]);
    expect(first.union(second)).toGenerate(["a", "b", "B", "c", "C"]);
  });

});
