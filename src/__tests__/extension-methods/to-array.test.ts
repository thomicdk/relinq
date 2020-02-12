import asEnumerable from "../..";

describe("toArray", function() {

  test('Simple', () => {
    const letters = asEnumerable(["a", "b", "c", "d"]);
    expect(letters.toArray()).toEqual(["a", "b", "c", "d"]);
   });
});

