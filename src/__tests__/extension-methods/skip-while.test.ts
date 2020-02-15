import asEnumerable from "../..";

describe("skipWhile", function() {

  test('Predicate matching zero elements', function() {
    const source = asEnumerable([ 15, 12, 14, 13, 11 ]);
    const query = source.skipWhile(x => x > 5);
    expect(query).toGenerate([]);
  });

  test('Predicate matching some elements', function() {
    const source = asEnumerable([ "zero", "one", "two", "three", "four", "five" ]);
    const query = source.skipWhile(x => x.length < 5);
    expect(query).toGenerate(["three", "four", "five"]);
  });

  test('Predicate matching all elements', function() {
    const source = asEnumerable([ 15, 12, 14, 13, 11 ]);
    const query = source.skipWhile(x => x < 5);
    expect(query).toGenerate([ 15, 12, 14, 13, 11 ]);
  });

});

