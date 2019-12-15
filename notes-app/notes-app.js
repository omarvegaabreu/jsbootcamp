const notes = getSavedNotes();

const filters = {
  searchText: ""
};

renderNotes(notes, filters);

// @ts-ignore
document.querySelector("#create-note").addEventListener("click", function(e) {
  notes.push({
    // @ts-ignore
    id: uuidv4(),
    title: "",
    body: ""
  });
  saveNotes(notes);
  renderNotes(notes, filters);
});

document.querySelector("#search-text").addEventListener("input", function(e) {
  // @ts-ignore
  filters.searchText = e.target.value;
  renderNotes(notes, filters);
});

document.querySelector("#filter-by").addEventListener("change", function(e) {
  // @ts-ignore
  console.log(e.target.value);
});
