// //multiple arguments
// let add = function(a, b) {
//   return a + b;
// };

// let result = add(10, 1);
// console.log(result);

// //default argunment

// let getScoreText = function(name = "Anonymous ", score = 0) {
//   return "name: " + name + " Score: " + score;
// };

// let scoreText = getScoreText(undefined, 50);
// console.log(scoreText);

// let tipCalculator = function(bill = 0, tipPercent = 0) {
//   let tip = bill * tipPercent;

//   let billAndTip = bill + tip;

//   return billAndTip;
// };
// let totalBill = tipCalculator(undefined, 0.2);

// // console.log(totalBill);

// let getScoreText = function (name)

// challenge area

let getTip = function(total, tipPercent) {
  let percent = tipPercent * 100;
  let tipAmount = total * tipPercent;
  return `A ${percent}% tip on  $${total}  bill would be $${tipAmount}`;
};

let tip = getTip(40, 0.25);

console.log(tip);
