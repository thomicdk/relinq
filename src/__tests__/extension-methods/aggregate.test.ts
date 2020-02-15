import asEnumerable from "../..";

describe("aggregate", function() {

  test('Sum', () => {
    const numbers = asEnumerable([1, 2, 3, 4, 5]);
    const sum = numbers.aggregate(0, (acc, x) => acc + x);

    expect(sum).toBe(15);
  });

  test('Empty sequence returns seed', () => {
    const source = asEnumerable([]);
    const result = source.aggregate(7, (acc, x) => x);

    expect(result).toBe(7);
  });

  test('Empty sequence returns seed with result selector', () => {
    const source = asEnumerable([]);
    const result = source.aggregate(6, (acc, x) => x, x => x.toString());

    expect(result).toBe("6");
  });

});

