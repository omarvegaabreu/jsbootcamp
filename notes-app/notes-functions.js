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
const generateDomNote = function(note) {
  const noteEl = document.createElement("p");

  if (note.title.length > 0) {
    noteEl.textContent = note.title;
  } else {
    noteEl.textContent = "Unnamed note";
  }

  return noteEl;
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
