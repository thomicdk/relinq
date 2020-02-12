import { Enumerable } from "../..";

describe("distinct", function() {

  test('Empty source', () => {
    const source = Enumerable.asEnumerable([]);
    expect(source.distinct()).toGenerate([]);
  });

  test('Distinct numbers', () => {
    const source = Enumerable.asEnumerable([1, 1, 4, 1, 4, 6]);
    expect(source.distinct()).toGenerate([1, 4, 6]);
  });

  test('Distinct strings', () => {
    const source = Enumerable.asEnumerable(["a", "b", "b", "a", "c", "b"]);
    expect(source.distinct()).toGenerate(["a", "b", "c"]);
  });

  test('Distinct objects', () => {
    const obj1 = { id: 1 },
          obj2 = { id: 2 },
          obj3 = { id: 3 };
    const source = Enumerable.asEnumerable([obj2, obj1, obj2, obj1, obj3, obj2, obj1]);
    expect(source.distinct().select(obj => obj.id)).toGenerate([2, 1, 3]);
  });

});
