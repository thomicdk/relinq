import { Enumerable } from "../enumerable";
import { Grouping } from "../grouping";
// import { Grouping } from "../enumerable";

describe('Grouping', function () {

  test('has property "key"', () => {
    const g = new Grouping("SomeKey", new Enumerable(function*() {
      yield 1;
      yield 2;
      yield 3;
    }));

    expect(g.key).toBe("SomeKey");
  });

  test('is iterable', () => {
    const g = new Grouping("SomeKey", new Enumerable(function*() {
      yield 4;
      yield 9;
      yield 1;
    }));

    expect(g).toGenerate([4, 9, 1]);
  });

});
