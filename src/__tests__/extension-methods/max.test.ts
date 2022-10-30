import { Enumerable } from "../..";

describe("max", function() {

  test('Max of an empty sequence', () => {
    const empty = Enumerable.from([]);
    expect(() => empty.max()).toThrowError("Sequence is empty");
  });

  test('Max of a simple sequence', () => {
    const simple = Enumerable.from([3, 1, 4, 2]);
    const min = simple.max();
    expect(min).toBe(4);
  });

  test('Max of a simple sequence using projection', () => {
    const simple = Enumerable.from([
      { value: 5 },
      { value: 8 },
      { value: 3 },
      { value: 6 },
    ]);
    const min = simple.max((item) => item.value);
    expect(min).toBe(8);
  });

  test('Max of letters (string)', () => {
    const letters = Enumerable.from(["d", "b", "c", "a", "f", "e"]);
    const min = letters.max();
    expect(min).toBe("f");
  });

});

