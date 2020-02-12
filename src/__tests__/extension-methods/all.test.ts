import asEnumerable from "../..";

describe("all", function() {

  test('Empty sequence returns true', () => {
    const source = asEnumerable([]);
    expect(source.all(x => x > 0)).toBe(true);
  });

  test('Predicate matching no elements returns false', () => {
    const source = asEnumerable([1, 5, 20, 30]);
    expect(source.all(x => x < 0)).toBe(false);
  });

  test('Predicate matching some elements returns false', () => {
    const source = asEnumerable([1, 5, 8, 9]);
    expect(source.all(x => x > 5)).toBe(false);
  });

  test('Predicate matching all elements returns true', () => {
    const source = asEnumerable([1, 5, 8, 9]);
    expect(source.all(x => x > 0)).toBe(true);
  });

  test('Lazy iteration', () => {
    const source = asEnumerable([{ val: 1 }, { val: 2 }, <any>undefined])

    // If we proceed too far, we get:
    // TypeError: Cannot read property 'val' of undefined
    const query = source.select(x => x.val);
    expect(query.all(x => x < 2)).toBe(false);
  });

});
