import asEnumerable from "../..";

describe("select", function() {

  test('Simple type projection', () => {
    const numbers = asEnumerable(["34", "10", "3"]);
    const actual = numbers.select(n => parseInt(n));
    expect(actual).toGenerate([34, 10, 3]);
  });


  test('Indexer in selector', () => {
    const numbers = asEnumerable([1, 2, 3, 4, 5]);
    const selector = (n: number, idx: number) => idx < 2;

    expect(numbers.select(selector)).toGenerate([true, true, false, false, false]);
  });


  test('select - Impure selector', () => {
    const source = asEnumerable([0, 0, 0]);
    let count = 0;
    const query = source.select(x => count++);

    expect(query).toGenerate([0,1,2]);
    expect(query).toGenerate([3,4,5]);
    count = 34;
    expect(query).toGenerate([34,35,36]);
  });

});

