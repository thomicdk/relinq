import { Enumerable } from "../..";

describe("except", function() {

  test('Empty first source', () => {
    const first = Enumerable.from([] as number[]);
    const second = Enumerable.from([2, 5, 9, 0, 5]);
    expect(first.except(second)).toGenerate([]);
  });

  test('Empty second source', () => {
    const first = Enumerable.from([4, 0, 1, 0, 6]);
    const second = Enumerable.from([] as number[]);
    expect(first.except(second)).toGenerate([4, 0, 1, 6]);
  });

  test('Empty two sources', () => {
    const first = Enumerable.from([]);
    const second = Enumerable.from([]);
    expect(first.except(second)).toGenerate([]);
  });

  test('Simple except', () => {
    const first = Enumerable.from(["a", "b", "B", "c", "a"]);
    const second = Enumerable.from(["a", "b", "c"]);
    expect(first.except(second)).toGenerate(["B"]);
  });

  test('Except no matches', () => {
    const first = Enumerable.from([1, 2, 3]);
    const second = Enumerable.from([4, 5, 6]);
    expect(first.except(second)).toGenerate([1, 2, 3]);
  });

});
