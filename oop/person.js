class Person {
  constructor(firstName, lastName, age, likes = []) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.likes = likes;
  }
  getBio() {
    let bio = `${this.firstName} likes ${this.age}  `;

    this.likes.forEach(like => {
      bio += `${this.firstName} Likes ${like} `;
    });

    return bio;
  }
  getAge() {
    return `this is get age: ${this.age}`;
  }

  setName(fullName) {
    const names = fullName.split(" ");
    this.firstName = names[0];
    this.lastName = names[1];
  }
}

class Employee extends Person {
  constructor(firstName, lastName, age, position, likes) {
    super(firstName, lastName, age, (likes = []));
    this.position = position;
  }
  getBio() {
    return `${this.firstName} works as a ${this.position} `;
  }
  getRetirement() {
    return 65 - this.age;
  }
}

class Student extends Person {
  constructor(firstName, lastName, grades) {
    super(firstName, lastName);
    this.grades = grades;
  }

  updateGrades(updateGrade) {
    this.grades += updateGrade;
  }
  getBio() {
    const status = this.grades >= 70 ? "Is passing" : "Is failing";

    return `${this.firstName} is ${status} the class. `;
  }
}
const otherStudent = new Student("Omar", "vega", 70);
console.log(otherStudent.getBio());
otherStudent.updateGrades(-30);
console.log(otherStudent.getBio());
