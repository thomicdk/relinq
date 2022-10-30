import { Enumerable } from "../..";

 describe("Enumerable", function() {

  describe("range()", () => {

    test('Simple range', () => {
      const actual = Enumerable.range(4, 3);
      expect(actual).toGenerate([4, 5, 6]);
    });

    test('Negative start', () => {
      const actual = Enumerable.range(-2, 5);
      expect(actual).toGenerate([-2, -1, 0, 1, 2 ]);
    });

    test('Empty range', () => {
      const actual = Enumerable.range(10, 0);
      expect(actual).toGenerate([]);
    });

    test('Iterable multiple times', () => {
      const source = Enumerable.range(0, 5);

      const array1 = source.toArray();
      const array2 = source.toArray();

      expect(array2).toGenerate([0, 1, 2, 3, 4]);
    });

  });

  describe("repeat", () => {

    test('Empty repeat', () => {
      const actual = Enumerable.repeat("EMPTY", 0);
      expect(actual).toGenerate([]);
    });

    test('Null repeat', () => {
      const actual = Enumerable.repeat(null, 3);
      expect(actual).toGenerate([null, null, null]);
    });

    test('Number repeat', () => {
      const actual = Enumerable.repeat(1, 5);
      expect(actual).toGenerate([1,1,1,1,1]);
    });

    test('String repeat', () => {
      const greeting = "hey";
      const actual = Enumerable.repeat(greeting, 2);
      expect(actual).toGenerate(["hey","hey"]);
    });

    test('Array repeat', () => {
      const numbers = [34, 10, 3];
      const actual = Enumerable.repeat(numbers, 2);
      expect(actual).toGenerate([[34, 10, 3], [34, 10, 3]]);
    });

    test('Iterable multiple times', () => {
      const source = Enumerable.repeat(3, 4);
      const array1 = source.toArray();
      const array2 = source.toArray();
      expect(array2).toGenerate([3, 3, 3, 3]);
    });
  });


  describe("toJSON()", () => {

    test('Simple range', () => {
      const actual = JSON.stringify(Enumerable.from([1,2,3,4]));
      expect(actual).toBe("[1,2,3,4]");
    });

  });
});

