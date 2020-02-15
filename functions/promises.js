const getDataCallback = callback => {
  setTimeout(() => {
    callback(undefined, "This is the data.");
  }, 2000);
};

getDataCallback((error, data) => {
  error ? console.log("error") : console.log(data);
});

const getPromiseData = data =>
  new Promise((resolved, reject) => {
    setTimeout(() => {
      resolved(data);
      reject("This is the PROMISE error");
    }, 2000);
  });

const promiseData = getPromiseData("PROMISE DATA");
promiseData.then(
  data => {
    console.log(data);
  },
  error => {
    console.log(error);
  }
);
