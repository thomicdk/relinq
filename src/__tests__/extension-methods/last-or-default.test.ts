import asEnumerable from "../..";

describe("lastOrDefault", function() {

  test('Empty sequence without predicate', () => {
    const numbers = asEnumerable([]);
    expect(numbers.lastOrDefault()).toBeUndefined();
  });

  test('Single element without predicate', () => {
    const numbers = asEnumerable([83]);
    expect(numbers.lastOrDefault()).toBe(83);
  });

  test('Multiple elements without predicate', () => {
    const numbers = asEnumerable([4, 6, 2]);
    expect(numbers.lastOrDefault()).toBe(2);
  });

  test('Empty sequence with predicate', () => {
    const numbers = asEnumerable([]);
    expect(numbers.lastOrDefault(x => x > 5)).toBeUndefined();
  });

  test('Single element with predicate matching', () => {
    const numbers = asEnumerable([26]);
    expect(numbers.lastOrDefault(x => x > 5)).toBe(26);
  });

  test('Single element with predicate not matching', () => {
    const numbers = asEnumerable([8]);
    expect(numbers.lastOrDefault(x => x > 10)).toBeUndefined();
  });

  test('Multiple elements with predicate matching 0 elements', () => {
    const numbers = asEnumerable([4, 6, 2]);
    expect(numbers.lastOrDefault(x => x < 0)).toBeUndefined();
  });

  test('Multiple elements with predicate matching 1 element', () => {
    const numbers = asEnumerable([4, 2, 6]);
    expect(numbers.lastOrDefault(x => x < 3)).toBe(2);
  });

  test('Multiple elements with predicate matching multiple elements', () => {
    const numbers = asEnumerable([2, 35, 1, 36, 9]);
    expect(numbers.lastOrDefault(x => x > 10)).toBe(36);
  });

});

