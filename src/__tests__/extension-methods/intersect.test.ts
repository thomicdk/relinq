import { Enumerable } from "../..";

describe("intersect", function() {

  test('Empty first source', () => {
    const first = Enumerable.from<number>([]);
    const second = Enumerable.from([2, 5, 9, 0, 5]);
    expect(first.intersect(second)).toGenerate([]);
  });

  test('Empty second source', () => {
    const first = Enumerable.from([4, 0, 1, 0, 6]);
    const second = Enumerable.from([]);
    expect(first.intersect(second)).toGenerate([]);
  });

  test('Empty two sources', () => {
    const first = Enumerable.from([]);
    const second = Enumerable.from([]);
    expect(first.intersect(second)).toGenerate([]);
  });

  test('Simple intersection', () => {
    const first = Enumerable.from(["a", "b", "B", "c", "a"]);
    const second = Enumerable.from(["b", "C", "B", "a", "a"]);
    expect(first.intersect(second)).toGenerate(["a", "b", "B"]);
  });

  test('Intersection no matches', () => {
    const first = Enumerable.from([1, 2, 3]);
    const second = Enumerable.from([4, 5, 6]);
    expect(first.intersect(second)).toGenerate([]);
  });

});
