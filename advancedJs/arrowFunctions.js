const square = num => num * num;

const squareLong = num => {
  return num * num;
};

console.log(square(5));
console.log("///////////////////");

const people = [
  {
    name: "Omar",
    age: 38
  },
  {
    name: "Omar Alejandro",
    age: 8
  },
  {
    name: "abigail",
    age: 3
  }
];

const under40 = people.filter(function(person) {
  return person.age < 40;
});

console.log(under40);

console.log("///////////////////");

const under30 = people.filter(person => person.age < 30);
console.log(under30);

console.log("///////////////////");

const findPerson = people.find(person => person.age === 3);
console.log(findPerson);
