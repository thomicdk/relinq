import asEnumerable from "../..";

describe("reverse", function() {
  test('Simple reverse', () => {
    const numbers = asEnumerable([34, 10, 3, 8]);
    const actual = numbers.reverse();
    expect(actual).toGenerate([8, 3, 10, 34]);
  });

  test('Arrays are buffered', () => {

    // A sneaky implementation may try to optimize for the case where the collection
    // implements IList or (even more "reliable") is an array: it mustn’t do this,
    // as otherwise the results can be tainted by side-effects within iteration
    const source = [0, 1, 2, 3];
    const query = asEnumerable(source).reverse();
    source[1] = 99; // This change *will* be seen due to deferred execution

    const iterator = query[Symbol.iterator]();

    let current = iterator.next();
    expect(current.value).toBe(3);

    source[2] = 100; // This change *won’t* be seen

    current = iterator.next();
    expect(current.value).toBe(2);

    current = iterator.next();
    expect(current.value).toBe(99);

    current = iterator.next();
    expect(current.value).toBe(0);
  });
});
