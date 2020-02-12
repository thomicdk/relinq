import asEnumerable from "../..";

describe("groupBy", function() {
  const input = asEnumerable([
    {key: "b", value: 2},
    {key: "a", value: 1},
    {key: "c", value: 3},
    {key: "a", value: 1},
    {key: "b", value: 2},
    {key: "b", value: 2},
    {key: "c", value: 3},
    {key: "c", value: 3},
  ]);

  test('is IEnumerable', () => {
    const groupKeys = input.groupBy(x => x.key).select(g => g.key);
    expect(groupKeys).toGenerate(["b", "a", "c"]);
  });

});
