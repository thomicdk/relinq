import asEnumerable from "../..";

describe("last", function() {

  test('Empty sequence without predicate', () => {
    const numbers = asEnumerable([]);
    expect(() => numbers.last()).toThrowError("Sequence was empty");
  });

  test('Single element without predicate', () => {
    const numbers = asEnumerable([54]);
    expect(numbers.last()).toBe(54);
  });

  test('Multiple elements without predicate', () => {
    const numbers = asEnumerable([4, 6, 2]);
    expect(numbers.last()).toBe(2);
  });

  test('Empty sequence with predicate', () => {
    const numbers = asEnumerable([]);
    expect(() => numbers.last(x => x > 5)).toThrowError("No items matched the predicate");
  });

  test('Single element with predicate matching', () => {
    const numbers = asEnumerable([15]);
    expect(numbers.last(x => x > 5)).toBe(15);
  });

  test('Single element with predicate not matching', () => {
    const numbers = asEnumerable([8]);
    expect(() => numbers.last(x => x > 10)).toThrowError("No items matched the predicate");
  });

  test('Multiple elements with predicate matching 0 elements', () => {
    const numbers = asEnumerable([4, 6, 2]);
    expect(() => numbers.last(x => x < 0)).toThrowError("No items matched the predicate");
  });

  test('Multiple elements with predicate matching 1 element', () => {
    const numbers = asEnumerable([4, 6, 2, 7, 9]);
    expect(numbers.last(x => x < 3)).toBe(2);
  });

  test('Multiple elements with predicate matching multiple elements', () => {
    const numbers = asEnumerable([2, 35, 1, 36, 9]);
    expect(numbers.last(x => x > 10)).toBe(36);
  });

  // test('Lazy iteration without predicate', () => {
  //   const source = asEnumerable([{ val: 1 }, { val: 2 }, <any>undefined])

  //   // If we proceed too far, we get:
  //   // TypeError: Cannot read property 'val' of undefined
  //   expect(source.last()).toEqual({ val: 1});
  // });

  // test('Lazy iteration with predicate', () => {
  //   const source = asEnumerable([{ val: 1 }, { val: 2 }, <any>undefined])

  //   // If we proceed too far, we get:
  //   // TypeError: Cannot read property 'val' of undefined
  //   expect(source.last(x => x.val > 1)).toEqual({ val: 2});
  // });

});

