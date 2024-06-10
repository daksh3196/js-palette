const makeApiCall = async (url, config) => {
  try {
    let resp = await fetch(url, config);
    resp = resp.json();
    return resp;
  } catch (e) {
    console.log("err", e);
    return e;
  }
};

const generateKey = (path, config) => {
  const key = Object.keys(config)
    .sort((a, b) => a.localeCompare(b))
    .map((k) => k + ": " + String(config[k]))
    .join("&");
  return path + key;
};

const cachedApiCall = (_timeout) => {
  const cache = new Map();
  return async function (path, config = {}) {
    const key = generateKey(path, config);
    const cachedRes = cache.get(key);
    console.log("is cache?", !!cachedRes, cachedRes, key);
    if (!cachedRes || Date.now() > cachedRes?.expiryTime) {
      console.log("making new api call");
      try {
        let result = await makeApiCall(path, config);
        cache.set(key, { ...result, expiryTime: Date.now() + _timeout });
        console.log("inside tryy call", result, key, cache);
        return result;
      } catch (e) {
        console.log("errrrrrrr", e);
      }
    } else {
      console.log("returning cached resss", cachedRes);
      return cachedRes;
    }
  };
};

const call = cachedApiCall(5000);
call("https://jsonplaceholder.typicode.com/todos/1", {})
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log("thenn errr", e);
  });

setTimeout(() => {
  console.log("Calling again");
  call("https://jsonplaceholder.typicode.com/todos/1", {}).then((a) =>
    console.log(a)
  );
}, 1000);
