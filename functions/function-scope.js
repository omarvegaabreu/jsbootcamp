let farenheitToCelcius = function(farenheit) {
  let celcius = ((farenheit - 32) * 5) / 9;
  return celcius;
};

let tempOne = farenheitToCelcius(32);
let tempTwo = farenheitToCelcius(68);

console.log(tempOne);
console.log(tempTwo);
