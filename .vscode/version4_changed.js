window.onload = () => {

  // var todoList = {
    
  //   addTodo: function(todoText) {
  //     this.todos.push({
  //       todoText: todoText,
  //       completed: false
  //     });
  //   },
  //   changeTodo: function(position, todoText) {
  //     this.todos[position].todoText = todoText;
  //   },
  //   toggleCompleted: function(position) {
  //     var todo = this.todos[position];
  //     todo.completed = !todo.completed;
  //   },
  
  // };
 var handlers = {
  todos: [],
  displayTodos: function() {
    console.log('My todos:', this.todos);
  },
  addTodo: function () {
      debugger;
      var addTodoTextInput = document.getElementById('addTodoTextInput');
      handlers.addTodo(addTodoTextInput.value);
      addTodoTextInput.value = '';
      this.displayTodos();
  },
  changeTodo: function () {
      debugger;
      var changeTodoPositionInput = document.getElementById('changeTodoPositionInput');
      var changeTodoTextInput = document.getElementById('changeTodoTextInput');
      todoList.changeTodo(changeTodoPositionInput.valueAsNumber, changeTodoTextInput.value);
      changeTodoPositionInput.value = '';
      changeTodoTextInput.value = '';
      this.displayTodos();
  },
  toggleCompleted: function () {
      debugger;
      var toggleCompletedPositionInput = document.getElementById('toggleCompletedPositionInput');
      todoList.toggleCompleted(toggleCompletedPositionInput.valueAsNumber);
      toggleCompletedPositionInput.value = '';
      this.displayTodos();
  },
}

};
