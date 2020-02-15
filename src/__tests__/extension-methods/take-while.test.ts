import asEnumerable from "../..";

describe("takeWhile", function() {

  test('Predicate matching zero elements', function() {
    const source = asEnumerable([ 15, 12, 14, 13, 11 ]);
    const query = source.takeWhile(x => x < 5);
    expect(query).toGenerate([]);
  });

  test('Predicate matching some elements', function() {
    const source = asEnumerable([ "zero", "one", "two", "three", "four", "five" ]);
    const query = source.takeWhile(x => x.length < 5);
    expect(query).toGenerate(["zero", "one", "two"]);
  });

  test('Predicate matching all elements', function() {
    const source = asEnumerable([ 15, 12, 14, 13, 11 ]);
    const query = source.takeWhile(x => x > 5);
    expect(query).toGenerate([ 15, 12, 14, 13, 11 ]);
  });

});

