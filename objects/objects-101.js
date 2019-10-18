let myBook = {
  title: "1984",
  author: "George Orwell",
  pageCount: 326
};

console.log(myBook);
console.log(
  `The book '${myBook.title}' writte by ${myBook.title} has ${myBook.pageCount} pages.`
);

myBook.title = "Animal Farm";

console.log("/////");
console.log(myBook);
console.log(
  `The book '${myBook.title}' writte by ${myBook.title} has ${myBook.pageCount} pages.`
);

//challenge are

//name, age, location of a person

let person = {
  name: "Omar",
  age: 39,
  location: "Miami FL"
};

console.log(
  `My name is ${person.name}. I live in ${person.location}, and I am ${person.age} years old`
);

person.age = person.age + 1;

console.log(
  `My name is ${person.name}. I live in ${person.location}, and I am ${person.age} years old`
);
