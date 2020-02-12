
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

// declare var global: any

// const GLOBAL_STATE = Symbol.for('$$jest-matchers-object');

// expect.extend({
//   toGenerate(received: any[], actual) {

//   //  const pass = typeof received[Symbol.iterator] === "function";
//     // TODO Check type
// //    return global[GLOBAL_STATE].matchers.toEqual([...received], actual);

//     const length = Math.max(received.length, actual.length);

//     let pass = true;
//     for (let i = 0; i < length; i++) {
//       pass = pass && this.equals(received[i], actual[i]);
//     }
//     return {
//       pass,
//       message: () => 'Failed toGenerate()'
//     }
//   }
// });
