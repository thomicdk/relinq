import asEnumerable from "../..";

describe("selectMany", function() {
  test('Flatten 2-dimensional array', () => {
    const input = asEnumerable([
      [17, 18, 19],
      [20, 21, 22],
      [23, 24, 25],
      [26, 27, 28],
    ]);
    const query = input.selectMany(arr => arr);

    expect(query).toGenerate([17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28]);
  });

  test('Flatten with projection and index', () => {
    const numbers = asEnumerable([3, 5, 20, 15]);

    const query = numbers.selectMany(
      // TODO: Why are explicit type annotations required here?
      (x: number, index: number) => new Array(index).fill(x, 0, index),
      (x) => x.toString()
    );
    expect(query).toGenerate(["5", "20", "20", "15", "15", "15"]);
  });

});
