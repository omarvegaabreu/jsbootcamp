// //FUNCTIONS - input(argument), code, output(return value)

// let greetUser = function() {
//   console.log("welcome user");
// };

// greetUser();
// greetUser();
// greetUser();

// let square = function(num) {
//   let result = num * num;
//   return result;
// };

// let value = square(3);
// let otherValue = square(10);

// console.log(value);
// console.log(otherValue);

//Challenge Area

//convertFarenheitToCelsiu

//Call a couple of times(32 -> 0)

//print the converted values

// const getFirstName = fullName => {
//   return fullName.split(" ")[0];
// };

// const getFirstName = fullName => fullName.split(" ")[0];

// const firstName = getFirstName("Omar Vega");
// console.log(firstName);

const multiplier = {
  //array of numbers
  numbers: [1, 2, 3, 4, 5],
  number: 1,
  multiply() {
    return this.numbers.map(num => num * this.number);
  }
};

console.log(multiplier.multiply());
// const multiplier = () => {
//   //numbers -- array of numbers
//   numbers:[1,2,3,4,5],
//   //multiply -- single number
//   number:2,
//   //multiply method -- multiply array by method
//     multiply()
// };
