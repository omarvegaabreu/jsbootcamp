const todos = [
  "Order cat food",
  "Clean Kitchen",
  "Buy food",
  "Do work",
  "Excercise"
];

//delete the 3rd item from array
todos.splice(2, 1);
//add a new item to the end of the array
todos.push("new item");
//remove the first item from the array.
todos.shift();

//do a foreach loop to show items in the array

todos.forEach(function(item, index) {
  const num = index + 1;

  console.log(`${num}. ${item}`);
});

console.log(`////////for loop////////`);
//for loop through array
for (let i = 0; i < todos.length; i++) {
  const num = i + 1;

  console.log(`${num}. ${todos[i]}`);
}

console.log(`Pending todo: ${todos}!`);
console.log(todos);
