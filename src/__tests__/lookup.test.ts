import asEnumerable from "..";

describe("Lookup", function() {
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
    const lookup = input.toLookup(x => x.key);
    const s = lookup.where(x => x.key === "a").select(x => x.key);
    expect(s).toGenerate(["a"]);
  });

});
