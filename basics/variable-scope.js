//lexical scope (static scope)

let varOne = "varOne";

if (true) {
  console.log(varOne);

  let varTwo = "varTwo";
  console.log(varTwo);

  if (true) {
    let varFour = "varFour";
    console.log(varFour);
    // console.log(va)
  }
}

if (true) {
  let varThree = "varThree";
  console.log(varThree);
}
