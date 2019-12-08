const todos = [
  {
    text: "Order cat food",
    completed: false
  },
  {
    text: "Clean Kitchen",
    completed: false
  },
  {
    text: "Buy food",
    completed: true
  },
  {
    text: "Do work",
    completed: true
  },
  {
    text: "Excercise",
    completed: false
  }
];

const filters = {
  searchText: "",
  hideCompleted: false
};

const renderedTodos = function(todos, filters) {
  const filteredTodos = todos.filter(function(todo) {
    const searchTextMatch = todo.text
      .toLowerCase()
      .includes(filters.searchText.toLowerCase());
    const hideCompletedMath = !filters.hideCompleted || !todo.completed;

    return searchTextMatch && hideCompletedMath;
  });

  document.querySelector("#todo").innerHTML = "";

  const incompleteTodo = todos.filter(function(todo) {
    return !todo.completed;
  });

  const summary = document.createElement("h2");
  summary.textContent = `You have ${incompleteTodo.length} pending todo`;
  document.querySelector("#todo").appendChild(summary);

  filteredTodos.forEach(todo => {
    const p = document.createElement("p");
    p.textContent = todo.text;
    document.querySelector("#todo").appendChild(p);
  });
};

renderedTodos(todos, filters);

document.querySelector("#search-text").addEventListener("input", function(e) {
  filters.searchText = e.target.value;
  renderedTodos(todos, filters);
});

document.querySelector("#todo-text").addEventListener("submit", function(e) {
  e.preventDefault();

  todos.push({
    text: e.target.elements.search.value,
    completed: false
  });

  renderedTodos(todos, filters);

  e.target.elements.search.value = "";
});

document
  .querySelector("#hide-completed")
  .addEventListener("change", function(e) {
    filters.hideCompleted = e.target.checked;
    renderedTodos(todos, filters);
  });
