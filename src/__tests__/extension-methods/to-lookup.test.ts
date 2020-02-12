import asEnumerable from "../..";

describe("toLookup", function() {
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

  test('key selector selects correct key', () => {
    const lookup = input.toLookup(x => x.key);

    expect(lookup.get("a")).toGenerate([
      {key: "a", value: 1},
      {key: "a", value: 1}
    ]);
  });

  test('element selector selects correct element', () => {
    const lookup = input.toLookup(x => x.key, x => x.value);
    expect(lookup.get("c")).toGenerate([3, 3, 3]);
  });

});
