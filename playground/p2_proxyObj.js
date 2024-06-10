// {{{  PROBLEM STATEMENT }}}

// let obj = {
//   i: 0,
// };

// // modify the object so that it can return the following output
// // your code goes here

// console.log(obj.i); // 1
// console.log(obj.i); // 2
// console.log(obj.i); // 3

let obj = {
  i: 0,
};

obj = new Proxy(obj, {
  get: (target, prop) => {
    if (target[prop] !== undefined) {
      target[prop] += 1;
      return target;
    }
  },
});

console.log(obj.i);
console.log(obj.i);
console.log(obj.i);
console.log(obj.i);
