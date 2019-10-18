// let name = " Omar Vega ";

// //lenght property
// console.log(name.length);

// //convert to upper case

// console.log(name.toUpperCase());

// //convert to lower case

// console.log(name.toLowerCase());

// //includes method: checks is string is included in x
// let password = "abc123pssword098";

// console.log(password.includes("password"));

// //trim: allows to remove extra white space

// console.log(name.trim());

let isValidPassword = function(password) {
  return password.length > 8 && !password.includes("password");
};

console.log(isValidPassword("astp"));
console.log(isValidPassword("sssssssssssssssastp"));
console.log(isValidPassword("astpssssssspassword"));
