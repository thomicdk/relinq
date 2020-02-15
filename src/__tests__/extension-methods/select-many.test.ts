import asEnumerable from "../..";

describe("selectMany", function() {

  test('Flatten with projection and index', () => {
    const numbers = asEnumerable([3, 5, 20, 15]);

    const query = numbers.selectMany((x, index: number) => (x + index).toString().split(""),
                                   (x, c) => x + ": " + c);
    // 3 => "3: 3"
    // 5 => "5: 6"
    // 20 => "20: 2", "20: 2"
    // 15 => "15: 1", "15: 8"
    expect(query).toGenerate(["3: 3", "5: 6", "20: 2", "20: 2", "15: 1", "15: 8"]);
  });

});
