window.onload = () => {
  
  var todoList = {
    todos: [],
  displayTodos: function() {
    console.log('My todos:', this.todos);
  },
    addTodo: function(todoText) {
      this.todos.push({
        todoText: todoText,
        completed: false
      });
    },
    changeTodo: function(position, todoText) {
      this.todos[position].todoText = todoText;
    },
    toggleCompleted: function(position) {
      var todo = this.todos[position];
      todo.completed = !todo.completed;
    },
  
  };
 var handlers = {
  
  addTodo: function () {
      debugger;
      var addTodoTextInput = document.getElementById('addTodoTextInput');
      todoList.addTodo(addTodoTextInput.value);
      addTodoTextInput.value = '';
      this.displayTodos();
  },
  changeTodo: function () {
      debugger;
      var changeTodoTextInput = document.getElementById('changeTodoTextInput');
      todoList.changeTodo( changeTodoTextInput.value);
      changeTodoTextInput.value = '';
      this.displayTodos();
  },
}

};
