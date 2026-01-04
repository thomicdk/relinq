import asEnumerable from "../../index";

describe("elementAt", function() {

  test('Empty sequence', () => {
    const source = asEnumerable([]);
    expect(() => source.elementAt(0)).toThrow("Index out of range");
  });

  test('Negative index is out of range', () => {
    const source = asEnumerable([5, 3, 9, 4]);
    expect(() => source.elementAt(-1)).toThrow("Index out of range");
  });

  test('Index out of range', () => {
    const source = asEnumerable([5, 3, 9, 4]);
    expect(() => source.elementAt(4)).toThrow("Index out of range");
  });

  test('Single element', () => {
    const source = asEnumerable([83]);
    expect(source.elementAt(0)).toBe(83);
  });

  test('First element', () => {
    const source = asEnumerable([83, 79, 66, 71]);
    expect(source.elementAt(0)).toBe(83);
  });

  test('Last element', () => {
    const source = asEnumerable([83, 79, 66, 71]);
    expect(source.elementAt(3)).toBe(71);
  });

  test('Multiple elements', () => {
    const source = asEnumerable([4, 6, 2]);
    expect(source.elementAt(1)).toBe(6);
  });

});
