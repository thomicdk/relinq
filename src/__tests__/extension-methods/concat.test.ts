import { Enumerable } from "../..";

describe("concat", function() {

  test('Empty first source', () => {
    const first = Enumerable.from<number>([]);
    const second = Enumerable.from([2, 5, 9, 0, 5]);
    expect(first.concat(second)).toGenerate([2, 5, 9, 0, 5]);
  });

  test('Empty second source', () => {
    const first = Enumerable.from([4, 0, 1, 0, 6]);
    const second = Enumerable.from<number>([]);
    expect(first.concat(second)).toGenerate([4, 0, 1, 0, 6]);
  });

  test('Empty two sources', () => {
    const first = Enumerable.from([]);
    const second = Enumerable.from([]);
    expect(first.concat(second)).toGenerate([]);
  });

  test('Simple concat', () => {
    const first = Enumerable.from(["a", "b", "B"]);
    const second = Enumerable.from(["b", "B", "a"]);
    expect(first.concat(second)).toGenerate(["a", "b", "B", "b", "B", "a"]);
  });

  test('Lazy iteration', () => {
    const first = Enumerable.from([{ val: 1 }, { val: 2 }])
    const second = Enumerable.from([<any>undefined, { val: 3 }]);
    const source = first.concat(second);
    // If we proceed too far, we get:
    // TypeError: Cannot read property 'val' of undefined
    const query = source.select(x => x.val);
    expect(query.take(2)).toGenerate([1, 2]);
  });

});
