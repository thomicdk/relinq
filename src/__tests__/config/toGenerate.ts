import { expect } from '@jest/globals';

declare global {
  namespace jest {
    interface Matchers<R> {
      toGenerate(expected: any): R;
    }
  }
}

const GLOBAL_STATE = Symbol.for('$$jest-matchers-object');
expect.extend({
  toGenerate(received, actual) {
    const toEqual = (global as any)[GLOBAL_STATE].matchers.toEqual;
    return toEqual.call(this, [...received], actual);
  }
});
