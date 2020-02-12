import asEnumerable from "../..";

describe("any", function() {

  test('Empty sequence without predicate', () => {
    const source = asEnumerable([]);
    expect(source.any()).toBe(false);
  });

  test('Empty sequence with predicate', () => {
    const source = asEnumerable([]);
    expect(source.any(x => x > 3)).toBe(false);
  });

  test('Non-empty sequence without predicate', () => {
    const source = asEnumerable([1, 2, 3]);
    expect(source.any()).toBe(true);
  });

  test('Non-empty sequence with predicate matching', () => {
    const source = asEnumerable([4, 5, 6]);
    expect(source.any(x => x > 3)).toBe(true);
  });

  test('Non-empty sequence with predicate not matching', () => {
    const source = asEnumerable([1, 2, 3]);
    expect(source.any(x => x > 3)).toBe(false);
  });

  test('Lazy iteration', () => {
    const source = asEnumerable([{ val: 1 }, { val: 2 }, <any>undefined])

    // If we proceed too far, we get:
    // TypeError: Cannot read property 'val' of undefined
    const query = source.select(x => x.val);
    expect(query.any()).toBe(true);
  });

});

