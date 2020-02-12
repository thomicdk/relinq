import asEnumerable from "../..";

describe("orderBy", function() {

  test('Simple number sorting', () => {
    const source = asEnumerable([6, 3, 8, 1, 9, 7, 0, 5, 2, 4]);
    const ordered = source.orderBy(x => x)
    expect(ordered).toGenerate([0, 1, 2, 3, 4, 5, 6, 7, 8, 9])
  });

  test('Simple number sorting descending', () => {
    const source = asEnumerable([6, 3, 8, 1, 9, 7, 0, 5, 2, 4]);
    const ordered = source.orderByDescending(x => x)
    expect(ordered).toGenerate([9, 8, 7, 6, 5, 4, 3, 2, 1, 0])
  });

  test('Ordering is stable', () => {
    const source = asEnumerable([
        { value: 3, key: 11 },
        { value: 2, key: 11 },
        { value: 4, key: 10 },
        { value: 1, key: 10 },
        { value: 6, key: 11 },
        { value: 9, key: 11 },
        { value: 5, key: 10 },
        { value: 8, key: 10 },
        { value: 7, key: 11 },
    ]);
    const actual = source
                    .orderBy(x => x.key)
                    .select(x => x.value);

    expect(actual).toGenerate([4,1,5,8,3,2,6,9,7])
  });

});
