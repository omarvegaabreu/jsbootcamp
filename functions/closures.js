const message = () => {
  let messageBody = "this is my message";
  const messageFunction = otherMessage => {
    messageBody = otherMessage;
    console.log(messageBody);
  };
  messageFunction("hi");
};

message();

const counter = () => {
  let count = 0;
  return {
    increment() {
      count++;
    },
    decrement() {
      count--;
    },
    get() {
      return count;
    }
  };
};

const addOrSubstract = counter();
addOrSubstract.increment();
addOrSubstract.decrement();

console.log(addOrSubstract.get());

const add = a => {
  return b => {
    return a + b;
  };
};

const add10 = add(10);
console.log(add10(10));
const add100 = add(100);
console.log(add100(100));
