let myBook = {
  title: "1984",
  author: "George Orwell",
  pageCount: 326
};

let otherBook = {
  title: "A Peoples History",
  author: "Howard Zinn",
  pageCount: 723
};

let getSummary = function(book) {
  return {
    summary: `${book.title} written by ${book.author}`,
    pageCountSummary: `${book.title} is ${book.pageCount} pages long`
  };
};

let bookSummary = getSummary(myBook);
let otherBookSummary = getSummary(otherBook);

console.log(bookSummary.pageCountSummary);

console.log("---------------- CHALLENGE AREA ---------------");

let tempConverter = function(fahrenheit) {
  let celcius = ((fahrenheit - 32) * 5) / 9;
  let kelvin = ((fahrenheit + 459.67) * 5) / 9;

  return {
    celcius: celcius,
    kelvin: kelvin,
    farenheit: fahrenheit
  };
};

let temperature = tempConverter(32);

console.log(
  `The temperature in farenheit is ${temperature.farenheit} in Celcius is ${temperature.celcius} and in Kelvin it is ${temperature.kelvin}`
);
