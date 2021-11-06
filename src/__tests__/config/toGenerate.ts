declare namespace jest {
  interface Matchers<R> {
    toGenerate(expected: any): R;
  }
}

const GLOBAL_STATE = Symbol.for('$$jest-matchers-object');
expect.extend({
  toGenerate(received, actual) {
    return global[GLOBAL_STATE].matchers.toEqual([...received], actual);
  }
});
