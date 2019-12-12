//read existing notes from local storage
const getSavedNotes = function() {
  const notesJSON = localStorage.getItem("notes");

  if (notesJSON !== null) {
    return JSON.parse(notesJSON);
  } else {
    return [];
  }
};

//remove notes from the list
const removeNotes = function(id) {
  // @ts-ignore
  const noteIndex = notes.findIndex(function(note) {
    return note.id === id;
  });
  if (noteIndex > -1) {
    // @ts-ignore
    notes.splice(noteIndex, 1);
  }
};

//save notes to local storage
const saveLocalStorage = function(notes) {
  localStorage.setItem("notes", JSON.stringify(notes));
};

//generate note in dom
const generateDomNote = function(notes) {
  //generate structure for a note
  const noteEL = document.createElement("div");
  const textEL = document.createElement("span");
  const button = document.createElement("button");

  //set up the remove note button
  button.textContent = "Delete";
  noteEL.appendChild(button);

  button.addEventListener("click", function() {
    removeNotes(notes);
    getSavedNotes(notes);
    renderedNotes(notes, filters);
  });

  if (notes.title.length > 0) {
    textEL.textContent = notes.title;
  } else {
    textEL.textContent = "Unnamed note";
  }

  noteEL.appendChild(textEL);
  return noteEL;
};

//render application notes
const renderedNotes = function(notes, filters) {
  const filteredNotes = notes.filter(function(note) {
    return note.title.toLowerCase().includes(filters.searchText.toLowerCase());
  });

  document.querySelector("#notes").innerHTML = "";

  filteredNotes.forEach(function(note) {
    const noteEl = generateDomNote(note);
    document.querySelector("#notes").appendChild(noteEl);
  });
};
