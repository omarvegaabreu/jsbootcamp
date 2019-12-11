//get local storage

const getSavedTodos = function() {
  const todosJSON = localStorage.getItem("todos");

  if (todosJSON !== null) {
    return JSON.parse(todosJSON);
  } else {
    return [];
  }
};

//save to local storage

const saveTodos = function(todos) {
  localStorage.setItem("todos", JSON.stringify(todos));
};

//render todos
const renderTodos = function(todos, filters) {
  const filteredTodos = todos.filter(function(todo) {
    const searchTextMatch = todo.text
      .toLowerCase()
      .includes(filters.searchText.toLowerCase());
    const hideCompletedMatch = !filters.hideCompleted || !todo.completed;

    return searchTextMatch && hideCompletedMatch;
  });

  const incompleteTodos = filteredTodos.filter(function(todos) {
    return !todos.completed;
  });

  document.querySelector("#todos").innerHTML = "";

  document.querySelector("#todos").appendChild(getSummary(incompleteTodos));

  filteredTodos.forEach(function(todos) {
    document.querySelector("#todos").appendChild(generateTodoDom(todos));
  });
};

//generate todo to the dom
const generateTodoDom = function(todos) {
  const div = document.createElement("div");
  const checkbox = document.createElement("input");
  const p = document.createElement("span");
  const button = document.createElement("button");

  //checkbox
  checkbox.setAttribute("type", "checkbox");
  div.appendChild(checkbox);
  //todo text
  p.textContent = todos.text;
  div.appendChild(p);
  //delete button
  button.textContent = "Delete";
  div.appendChild(button);

  return div;
};

//get summary
const getSummary = function(incompleteTodos) {
  const summary = document.createElement("h2");
  summary.textContent = `You have ${incompleteTodos.length} todos left`;
  return summary;
};
