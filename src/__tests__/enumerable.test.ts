import { Enumerable } from "../";

 describe("Enumerable", function() {

  describe("is iterable", () => {
      const e = Enumerable.from([1, 2, 3]);
      const result = [...e];
      expect(result).toEqual([1, 2, 3]);
  });

  describe("empty()", () => {
      const actual = Enumerable.empty<number>();
      const expected: string[] = [];
      expect(actual).toGenerate(expected);
  });

  describe("infiniteSequence()", function() {

    test('Integers from zero with step 1', () => {
      const result = Enumerable.infiniteSequence(0, 1).take(5).toArray();
      expect(result).toEqual([0, 1, 2, 3, 4]);
    });

    test('Integers from non-zero start', () => {
      const result = Enumerable.infiniteSequence(5, 1).take(4).toArray();
      expect(result).toEqual([5, 6, 7, 8]);
    });

    test('Step greater than 1', () => {
      const result = Enumerable.infiniteSequence(0, 2).take(5).toArray();
      expect(result).toEqual([0, 2, 4, 6, 8]);
    });

    test('Negative step', () => {
      const result = Enumerable.infiniteSequence(10, -1).take(4).toArray();
      expect(result).toEqual([10, 9, 8, 7]);
    });

    test('Decimal step', () => {
      const result = Enumerable.infiniteSequence(1, 0.5).take(4).toArray();
      expect(result).toEqual([1, 1.5, 2, 2.5]);
    });

    test('Can be iterated multiple times', () => {
      const seq = Enumerable.infiniteSequence(0, 1).take(3);
      expect(seq.toArray()).toEqual([0, 1, 2]);
      expect(seq.toArray()).toEqual([0, 1, 2]);
    });
  });

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

  describe("repeat()", () => {

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

