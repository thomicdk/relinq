import asEnumerable from "../..";

describe("count", function() {

  test('Simple array count', () => {
    const numbers = asEnumerable(["34", "10", "3"]);
    const actual = numbers.count();
    expect(actual).toBe(3);
  });

  test('Count with predicate', () => {
    const numbers = asEnumerable([34, 10, 3, 6, 1]);
    const actual = numbers.count(x => x > 9);
    expect(actual).toBe(2);
  });

  test('Count Map with predicate', () => {
    const map: Map<string, string> = new Map();
    map.set("foo", "bar");
    map.set("alice", "bob");
    map.set("ying", "yang");
    map.set("up", "down");
    const enumerableMap = asEnumerable(map);
    const startsWithLetterB = (input: string) => input.indexOf("b") === 0;
    const actual = enumerableMap.count(([key, value]) => startsWithLetterB(value));
    expect(actual).toBe(2);
  });

});

