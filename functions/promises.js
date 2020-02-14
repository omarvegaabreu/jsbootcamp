const getDataCallback = callback => {
  setTimeout(() => {
    callback(undefined, "This is the data.");
  }, 2000);
};

getDataCallback((error, data) => {
  error ? console.log("error") : console.log(data);
});

const promiseData = new Promise((resolved, reject) => {
  setTimeout(() => {
    resolved("This is the PROMISE data");
    reject("This is the PROMISE error");
  }, 2000);
});

promiseData.then(
  data => {
    console.log(data);
  },
  error => {
    console.log(error);
  }
);
