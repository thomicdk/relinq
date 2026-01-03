import asEnumerable from "../..";

describe("sequenceEqual()", function() {

  test('Empty sequences', () => {
    const first  = asEnumerable([]);
    const second = asEnumerable([]);
    expect(first.sequenceEqual(second)).toBe(true);
  });

  test('Simple sequence match - number', () => {
    const first  = asEnumerable([4, 6, 85]);
    const second = asEnumerable([4, 6, 85]);
    expect(first.sequenceEqual(second)).toBe(true);
  });

  test('Simple sequence match - string', () => {
    const first  = asEnumerable(["m", "i", "c", "h", "a", "e", "l"]);
    const second = asEnumerable(["m", "i", "c", "h", "a", "e", "l"]);
    expect(first.sequenceEqual(second)).toBe(true);
  });

  test('Simple sequence match - string case sensitive', () => {
    const first  = asEnumerable(["M", "I", "C", "H", "A", "E", "L"]);
    const second = asEnumerable(["m", "i", "c", "h", "a", "e", "l"]);
    expect(first.sequenceEqual(second)).toBe(false);
  });

  test('Simple sequence match - boolean', () => {
    const first  = asEnumerable([true, true, false, true, false, false, true]);
    const second = asEnumerable([true, true, false, true, false, false, true]);
    expect(first.sequenceEqual(second)).toBe(true);
  });

  test('Ordering must match', () => {
    const first  = asEnumerable([1, 2, 3]);
    const second = asEnumerable([3, 2, 1]);
    expect(first.sequenceEqual(second)).toBe(false);
  });

  test('Uneven length sequences 1', () => {
    const first  = asEnumerable([1,2,3,4,5]);
    const second = asEnumerable([1,2,3]);
    expect(first.sequenceEqual(second)).toBe(false);
  });

  test('Uneven length sequences 2', () => {
    const first  = asEnumerable([1,2,3]);
    const second = asEnumerable([1,2,3,4,5]);
    expect(first.sequenceEqual(second)).toBe(false);
  });

});