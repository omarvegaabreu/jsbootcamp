let num = 103.941;

console.log(num.toFixed(2));

console.log(Math.round(num));
console.log(Math.floor(num));
console.log(Math.ceil(num));

let min = 10;
let max = 20;
let randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
console.log(randomNum);

console.log("////////////////CHALLENGE ////////////");

let makeGuess = function(number) {
  let min = 1;
  let max = 5;
  let playerGuess = Math.floor(Math.random() * (max - min + 1)) + min;

  return playerGuess === number;

  // if (playerGuess === number) {
  //   return `You win! the number is ${number} and you choose ${playerGuess}`;
  // } else {
  //   return ` you loose with ${playerGuess} the correct number is ${number}`;
  // }
};

console.log(makeGuess(1));
