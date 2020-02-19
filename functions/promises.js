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

const promiseChaining = num =>
  new Promise((resolved, reject) => {
    setTimeout(() => {
      typeof num === "number" ? resolved(num * 2) : reject("Error");
    });
  });

promiseChaining(10).then(num => {
  promiseChaining(num).then(num => {
    console.log(`this is line 38:${num}`);
  });
});

promiseChaining(30).then(num => {
  promiseChaining(num).then(num => {
    promiseChaining(num).then(num => {
      console.log(`this is line 45:${num}`);
    });
  });
});

promiseChaining(30)
  .then(num => {
    return promiseChaining(num);
  })
  .then(num => {
    console.log(`line 55 ${num}`);
  });

new Promise((resolved, rejected) => {
  const request = new XMLHttpRequest();
  request.addEventListener("readystatechange", e => {
    if (e.target.readyState === 4 && e.target.status === 200) {
      const data = JSON.parse(e.target.responseText);
      resolved(data.puzzle);
    } else if (e.target.readyState === 4 && e.target.status !== 200) {
      rejected("An error has taken place");
    }
  });

  request.open("GET", `http://puzzle.mead.io/puzzle?wordCount=${wordCount}`);
  request.send();
});
