/*** create an array with five things todo
 * you have x amount of todos
 * print the first and second to last -> last
 */
const todos = [
  "Get better at JS",
  "Deploy the website",
  "call julio tomorrow",
  "apply for work"
];
//delete the 3rd item
todos.splice(2, 1);
//add a new item onto the end
todos.push("I really need to call julio. I will not delete it");
//remove the first item from the list
todos.shift();

console.log(` You have ${todos.length} todos!`);

todos.forEach(function(item, index) {
  const numbers = index + 1;
  console.log(`${numbers}. ${item}`);
});
