import asEnumerable from "../..";

describe("where", function() {

  test('Simple filtering', () => {
    const numbers = asEnumerable([1, 2, 3, 4, 5, 6, 7, 8, 9]);
    const predicate = (n: number) => n > 6;

    expect(numbers.where(predicate)).toGenerate([7, 8, 9]);
  });


  test('Simple indexer in predicate', () => {
    const numbers = asEnumerable([1, 2, 3, 4, 5, 6, 7, 8, 9]);
    const predicate = (n: number) => n > 6;

    expect(numbers.where(predicate)).toGenerate([7, 8, 9]);
  });

  test('Indexer in predicate', () => {
    const numbers = asEnumerable([1, 2, 3, 4, 5, 6, 7, 8, 9]);
    const predicate = (n: number, idx: number) => idx < 2;

    expect(numbers.where(predicate)).toGenerate([1, 2]);
  });

  test('where - being "pure"', () => {
    const numbers = asEnumerable([1, 2, 3, 4, 5]);

    const one = [...numbers.where(x => x < 3)];
    const two = [...numbers.where(x => x < 3)];

    expect(one).toEqual([1, 2]);
    expect(two).toEqual([1, 2]);
  });

  test('where - chained', () => {
    const numbers = asEnumerable([1,2,3,4,5]);

    expect(
      numbers
        .where(x => x > 2)
        .where(x => x < 5)
    ).toGenerate([3, 4]);
  });

});

