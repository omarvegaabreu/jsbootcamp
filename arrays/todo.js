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

const deleteTodo = (todos, todoText) => {
  const index = todos.findIndex(todo => {
    return todo.text.toLowerCase() === todoText.toLowerCase();
  });
  if (index > -1) {
    todos.splice(index, 1);
  }
};

deleteTodo(todos, "Order cat food");

const getThingsToDo = todos => {
  return todos.filter(todo => {
    return !todo.completed;
  });
};

const sortTodos = todos => {
  todos.sort((a, b) => {
    if (!a.completed && b.completed) {
      return -1;
    } else if (!b.completed && a.completed) {
      return 1;
    } else {
      return 0;
    }
  });
};

sortTodos(todos);
console.log(todos);

// console.log(todos);
// console.log(getThingsToDo(todos));
