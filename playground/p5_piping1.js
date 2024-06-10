// console.log(pipe(test)(1, 1, 1));

// // expected output
// // {
// //   "a": {
// //     "b": 3,
// //     "c": 1
// //   },
// //   "d": -1,
// //   "e": 1,
// //   "f": true
// // }

function pipe(obj) {
  return function (...args) {
    Object.keys(obj).forEach((el) => {
      let val = obj[el];
      if (typeof val == "function") {
        obj[el] = val(...args);
        // console.log(val, ...args, val(...args), obj);
      } else {
        pipe(val)(...args);
      }
    });
    return obj;
  };
}

let test = {
  a: {
    b: (a, b, c) => a + b + c,
    c: (a, b, c) => a + b - c,
  },
  d: (a, b, c) => a - b - c,
  e: 1,
  f: true,
};

console.log(pipe(test)(2, 1, 1));
// pipe(test)(2, 1, 1);
