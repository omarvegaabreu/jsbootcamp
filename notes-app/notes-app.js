let notes = [];

const filters = {
  searchText: ""
};

const notesJSON = localStorage.getItem("notes");

if (notesJSON !== null) {
  notes = JSON.parse(notesJSON);
}

const renderedNotes = function(notes, filters) {
  const filteredNotes = notes.filter(function(note) {
    return note.title.toLowerCase().includes(filters.searchText.toLowerCase());
  });

  document.querySelector("#notes").innerHTML = "";

  filteredNotes.forEach(function(note) {
    const noteEl = document.createElement("p");

    if (note.title.length > 0) {
      noteEl.textContent = note.title;
    } else {
      noteEl.textContent = "Unnamed note";
    }

    document.querySelector("#notes").appendChild(noteEl);
  });
};

renderedNotes(notes, filters);

document.querySelector("#create-note").addEventListener("click", function(e) {
  notes.push({
    title: "",
    body: ""
  });
  localStorage.setItem("notes", JSON.stringify(notes));
  renderedNotes(notes, filters);
});

document.querySelector("#search").addEventListener("input", function(e) {
  filters.searchText = e.target.value;
  renderedNotes(notes, filters);
});

document.querySelector("#filter-by").addEventListener("change", function(e) {
  console.log(e.target.value);
});
