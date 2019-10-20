const notes = ["Note 1", "Note 2", "Note 3"];

// notes.push("New note");

// console.log(notes.shift());
// console.log(notes.unshift());

// notes.unshift("my first note");

// console.log(omar);

// notes.splice(1, 0, "let me add this");

notes.forEach(function(item, index) {
  console.log(index);
  console.log(item);
});

console.log(notes);
console.log(notes.length);

//Counting 1...

for (let count = 0; count <= 2; count++) {
  console.log(count);
}

for (let count = 2; count >= 0; count--) {
  console.log(count);
}

for (let count = 0; count < notes.length; count++) {
  console.log(`foward ${notes[count]}`);
}

for (let count = notes.length - 1; count >= 0; count--) {
  console.log(` Array in reverse ${notes[count]}`);
}
