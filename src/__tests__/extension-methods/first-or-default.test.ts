import asEnumerable from "../..";

describe("firstOrDefault", function() {

  test('Empty sequence without predicate', () => {
    const numbers = asEnumerable([]);
    expect(numbers.firstOrDefault()).toBeUndefined();
  });

  test('Single element without predicate', () => {
    const numbers = asEnumerable([83]);
    expect(numbers.firstOrDefault()).toBe(83);
  });

  test('Multiple elements without predicate', () => {
    const numbers = asEnumerable([4, 6, 2]);
    expect(numbers.firstOrDefault()).toBe(4);
  });

  test('Empty sequence with predicate', () => {
    const numbers = asEnumerable([]);
    expect(numbers.firstOrDefault(x => x > 5)).toBeUndefined();
  });

  test('Single element with predicate matching', () => {
    const numbers = asEnumerable([26]);
    expect(numbers.firstOrDefault(x => x > 5)).toBe(26);
  });

  test('Single element with predicate not matching', () => {
    const numbers = asEnumerable([8]);
    expect(numbers.firstOrDefault(x => x > 10)).toBeUndefined();
  });

  test('Multiple elements with predicate matching 0 elements', () => {
    const numbers = asEnumerable([4, 6, 2]);
    expect(numbers.firstOrDefault(x => x < 0)).toBeUndefined();
  });

  test('Multiple elements with predicate matching 1 element', () => {
    const numbers = asEnumerable([4, 6, 2]);
    expect(numbers.firstOrDefault(x => x < 3)).toBe(2);
  });

  test('Multiple elements with predicate matching multiple elements', () => {
    const numbers = asEnumerable([2, 35, 1, 36, 21]);
    expect(numbers.firstOrDefault(x => x > 10)).toBe(35);
  });

  test('Lazy iteration without predicate', () => {
    const source = asEnumerable([{ val: 1 }, { val: 2 }, <any>undefined])

    // If we proceed too far, we get:
    // TypeError: Cannot read property 'val' of undefined
    expect(source.firstOrDefault()).toEqual({ val: 1});
  });

  test('Lazy iteration with predicate', () => {
    const source = asEnumerable([{ val: 1 }, { val: 2 }, <any>undefined])

    // If we proceed too far, we get:
    // TypeError: Cannot read property 'val' of undefined
    expect(source.firstOrDefault(x => x.val > 1)).toEqual({ val: 2});
  });

});

