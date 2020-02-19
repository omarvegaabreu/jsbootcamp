const getPromiseData2 = data =>
  new Promise((resolved, reject) => {
    setTimeout(() => {
      resolved(data);
      reject("This is the PROMISE error");
    }, 2000);
  });

const test = async () => {
  return (data = getPromiseData2(2));
};

console.log(test);
