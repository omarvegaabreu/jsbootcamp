const Person = function(firstName, lastName, age) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
};

const me = new Person("Omar", "vega", 27);
console.log(me);

const meTwo = new Person("Rosely", "De Los Santos", 38);
console.log(meTwo);
