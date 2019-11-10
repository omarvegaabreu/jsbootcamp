const notes = [
  {
    title: "My next trip",
    body: "I would like to go to spain"
  },
  {
    title: "habbits to work on",
    body: "Excersice, and eat better"
  },
  {
    title: "Office modification",
    body: "A really need a new chair :P"
  }
];

const sortNotes = notes => {
  notes.sort((a, b) => {
    if (a.title.toLowerCase() < b.title.toLowerCase()) {
      return -1;
    } else if (b.title.toLowerCase() < a.title.toLowerCase()) {
      return 1;
    } else {
      return 0;
    }
  });
};

sortNotes(notes);

const findNotes = (notes, query) => {
  return notes.filter((note, index) => {
    const isTitleMath = note.title.toLowerCase().includes(query.toLowerCase());
    const isBodyMatch = note.body.toLowerCase().includes(query.toLowerCase());
    return isTitleMath || isBodyMatch;
  });
};

// console.log(findNotes(notes, "madre"));
console.log(notes);
