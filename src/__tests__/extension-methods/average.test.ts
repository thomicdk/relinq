import { Enumerable } from "../..";

describe("average", function() {

  test('Averaging an empty sequence throws', () => {
    const empty = Enumerable.from([]);
    expect(() => empty.average()).toThrow("Sequence is empty");
  });

  test('Averaging a simple sequence', () => {
    const nums = Enumerable.from([1, 2, 3, 4, 5]);
    expect(nums.average()).toBe(3);
  });

  test('Averaging a sequence with decimals', () => {
    const nums = Enumerable.from([1, 2]);
    expect(nums.average()).toBe(1.5);
  });

  test('Averaging a single-element sequence', () => {
    const nums = Enumerable.from([42]);
    expect(nums.average()).toBe(42);
  });

  test('Averaging using a selector', () => {
    const items = Enumerable.from([
      { value: 10 },
      { value: 20 },
      { value: 30 },
    ]);
    expect(items.average((item) => item.value)).toBe(20);
  });

  test('Averaging using a selector with decimals', () => {
    const items = Enumerable.from([
      { score: 7 },
      { score: 8 },
    ]);
    expect(items.average((item) => item.score)).toBe(7.5);
  });

});
