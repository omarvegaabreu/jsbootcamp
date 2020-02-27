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
  constructor(name = "Anonymous", lastName, age = 0, major) {
    super(name, lastName, age);
    this.major = major;
  }

  getMajor() {
    return `${this.name}'s Mayor is: ${this.major}`;
  }

  getDescription() {
    let description = super.getDescription();
    return (description += ` his major is ${this.major}`);
  }
}

class Traveler extends Person {
  constructor(name = "Anonymous", lastName, location) {
    super(name, lastName);
    this.location = location;
  }
  getGreeting() {
    let greeting = super.getGreeting();

    if (this.location) {
      return greeting + ` I am from ${this.location}`;
    } else {
      return greeting;
    }
  }
}

// const omar = new Students("Omar", "Vega", 37, "Law");
const omar = new Traveler("Omar", "Vega", "Miami,FL");
const other = new Traveler("Alejandro", "Vega");
console.log(omar.getGreeting());
console.log(other.getGreeting());
// console.log(omar.getDescription());
// console.log(other.getDescription());
// // console.log(other.getDescription());
