//read existing notes from local storage
const getSavedNotes = function() {
  const notesJSON = localStorage.getItem("notes");

  if (notesJSON !== null) {
    return JSON.parse(notesJSON);
  } else {
    return [];
  }
};

//save notes to local storage
const saveLocalSorage = function(notes) {
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

  if (notes.title.length > 0) {
    textEL.textContent = note.title;
  } else {
    textEL.textContent = "Unnamed note";
  }

  noteEL.appendChild(textEL);
  debugger;

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
