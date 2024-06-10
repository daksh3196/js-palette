//      {{{ Problem: Try browser throttling in 2g  }}}
//
// const fetchWithTimeout = function () {
//   // ... your code goes here
// };

// fetchWithTimeout("https://jsonplaceholder.typicode.com/todos/1", 100)
//   .then((resp) => {
//     console.log(resp);
//   })
//   .catch((error) => {
//     console.error(error);
//   });

// // Aborted
// // error

const fetchWithTimeout = (url, _timeout) => {
  return new Promise((res, rej) => {
    const apiController = new AbortController();
    console.log(apiController, apiController.signal);
    const signal = apiController.signal;
    let timerId = null;
    fetch(url, { signal })
      .then((data) => {
        clearTimeout(timerId);
        res(e);
      })
      .catch((err) => {
        rej(err);
      });

    timerId = setTimeout(() => {
      console.log("Aborteddd");
      apiController.abort();
    }, _timeout);
  });
};

let func = fetchWithTimeout(
  "https://jsonplaceholder.typicode.com/todos/1",
  100
);
