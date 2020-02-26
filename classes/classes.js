"use strict";

class Person {
  constructor(name = "Anonymous", lastName, age = 0) {
    this.name = name;
    this.lastName = lastName;
    this.age = age;
  }
  getGreeting() {
    return `Hi:${this.name}, I hope you are doing well.`;
  }
  getDescription() {
    return `${this.name} is ${this.age} years old.`;
  }
}

class Students extends Person {
  constructor(name, major) {
    super(name);
    this.major = major;
  }
}

const omar = new Person("Omar", "Vega", 37);

const other = new Students("Alejandro", "Computer Science");
// console.log(omar.getGrade());
// console.log(omar);
console.log(other);
// console.log(other.getDescription());
