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

const filters = {
  searchText: ""
};

const renderedNotes = function(notes, filters) {
  const filteredNotes = notes.filter(function(note) {
    return note.title.toLowerCase().includes(filters.searchText.toLowerCase());
  });

  document.querySelector("#notes").innerHTML = "";

  filteredNotes.forEach(function(note) {
    const noteEl = document.createElement("p");
    noteEl.textContent = note.title;
    document.querySelector("#notes").appendChild(noteEl);
  });
};

renderedNotes(notes, filters);

document.querySelector("#create-note").addEventListener("click", function(e) {
  e.target.textContent = "I was clicked";
});

document.querySelector("#search").addEventListener("input", function(e) {
  filters.searchText = e.target.value;
  renderedNotes(notes, filters);
});

document.querySelector("#for-fun").addEventListener("change", function(e) {
  if (e.target.checked === true) {
    const farted = document.createElement("h1");
    farted.textContent = "YOUR NAME IS GRAZZY TWIG SILLY";
    document.querySelector("#notes").appendChild(farted);
  }
});
