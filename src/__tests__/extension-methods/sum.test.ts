import { Enumerable } from "../..";

describe("sum", function() {

  test('Summing an empty sequence', () => {
    const empty = Enumerable.asEnumerable([]);
    const sum = empty.sum();
    expect(sum).toBe(0);
  });

  test('Summing a simple sequence', () => {
    const empty = Enumerable.asEnumerable([3, 1, 4, 2]);
    const sum = empty.sum();
    expect(sum).toBe(10);
  });

  test('Summing a simple sequence using projection', () => {
    const empty = Enumerable.asEnumerable([
      { value: 5 },
      { value: 8 },
      { value: 3 },
      { value: 6 },
    ]);
    const sum = empty.sum((item) => item.value);
    expect(sum).toBe(22);
  });

});

