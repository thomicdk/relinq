declare global {
  namespace jest {
    interface Matchers<R, T = {}> {
      toGenerate(expected: any): R;
    }
  }
}

expect.extend({
  toGenerate(received, actual) {
    const jest = (global as any)[Symbol.for('$$jest-matchers-object')];
    return jest.matchers.toEqual([...received], actual);
  }
});

export default undefined;
