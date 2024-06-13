const asyncPipe =
  (...functions) =>
  (initialValue) =>
    functions.reduce((acc, fn) => acc.then(fn), Promise.resolve(initialValue));

const p1 = async (a) => await a * 5;
const p2 = async (a) => await a * 2;
const f3 = (a) => a * 3;
const p4 = async (a) => await a * 4;

asyncPipe(p1, p2, f3, p4)(10).then((res) => console.log(res)); // 1200