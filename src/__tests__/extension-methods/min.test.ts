import { Enumerable } from "../..";

describe("min", function() {

  test('Min of an empty sequence', () => {
    const empty = Enumerable.from([]);
    expect(() => empty.min()).toThrowError("Sequence is empty");
  });

  test('Min of a simple sequence', () => {
    const simple = Enumerable.from([3, 1, 4, 2]);
    const min = simple.min();
    expect(min).toBe(1);
  });

  test('Min of a simple sequence using projection', () => {
    const simple = Enumerable.from([
      { value: 5 },
      { value: 8 },
      { value: 3 },
      { value: 6 },
    ]);
    const min = simple.min((item) => item.value);
    expect(min).toBe(3);
  });

  test('Min of letters (string)', () => {
    const letters = Enumerable.from(["d", "b", "c", "a", "f", "e"]);
    const min = letters.min();
    expect(min).toBe("a");
  });

});

