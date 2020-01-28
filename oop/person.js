const Person = function(firstName, lastName, age, likes = []) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
  this.likes = likes;
};

Person.prototype.getBio = function() {
  let bio = `${this.firstName} likes ${this.age}  `;

  this.likes.forEach(like => {
    bio += `${this.firstName} Likes ${like} `;
  });

  return bio;
};

Person.prototype.getAge = function() {
  return `this is get age: ${this.age}`;
};

Person.prototype.setName = function(fullName) {
  const names = fullName.split(" ");
  this.firstName = names[0];
  this.lastName = names[1];
};

const me = new Person("Omar", "Vega", 38, ["Jujitsu", "Playing", "family"]);
me.setName("Alexis Turner");
console.log(me.getBio());

const meTwo = new Person("Rosely", "De los Santos", 38);
console.log(meTwo.getBio());
console.log(meTwo.getAge());
