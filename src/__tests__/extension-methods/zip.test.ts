import asEnumerable from "../..";

describe("zip", function() {

  test('Zip with neighbour', () => {
    const source = asEnumerable(["a", "b", "c", "d", "e"]);
    const query = source.zip(source.skip(1), (x, y) => x + y);

    expect(query).toGenerate(["ab", "bc", "cd", "de"]);
  });

  test('Zip with shorter source', () => {
    const source = asEnumerable(["a", "b", "c",]);
    const second = asEnumerable([1, 2, 3, 4, 5]);
    const query = source.zip(second, (x, y) => `${x}:${y}`);

    expect(query).toGenerate(["a:1", "b:2", "c:3"]);
  });

  test('Zip with shorter second', () => {
    const source = asEnumerable(["a", "b", "c", "d", "e"]);
    const second = asEnumerable([1, 2, 3]);
    const query = source.zip(second, (x, y) => `${x}:${y}`);

    expect(query).toGenerate(["a:1", "b:2", "c:3"]);
  });

});

