import asEnumerable from "../..";

describe("toDictionary", () => {

  test('Just key selector', () => {
    const source = asEnumerable(["alice", "bob", "charlie"]);
    const dict = source.toDictionary(x => x[0]);

    expect(dict.get("a")).toBe("alice");
    expect(dict.get("b")).toBe("bob");
    expect(dict.get("c")).toBe("charlie");
  });

  test('Key and element selector', () => {
    const source = asEnumerable(["alice", "bob", "charlie"]);
    const dict = source.toDictionary(x => x[0], x => x.length);

    expect(dict.get("a")).toBe(5);
    expect(dict.get("b")).toBe(3);
    expect(dict.get("c")).toBe(7);
  });

  test('Duplicate key', () => {
    const source = asEnumerable(["alice", "bob", "charlie", "aura"]);
    expect(() =>
      source.toDictionary(x => x[0])
    ).toThrowError("Key already exists in dictionary");
  });

});
