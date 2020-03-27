

// It should store the todos in an array of an object

var todoList = {
	todos: [ "item 1", "item 2", "item 3" ]
};

// to display todos

var todoList = {
	todos: [ "item 1", "item 2", "item 3" ],
	displayTodos: function() {
		console.log('My todos:', this.todos);
	}
};

//  to add todos

var todoList = {
	todos: [ "item 1", "item 2", "item 3" ],
	displayTodos: function() {
		console.log('My todos:', this.todos);
  }, 
   addTodo: function(todo) {
		this.todos.push(todo);
		this.displayTodos();
	}
};

// to change todos

var todoList = {
	todos: [ 'item-1', 'item-2', 'item-3' ],
	displayTodos: function() {
		console.log('My todos:', this.todos);
	},
	addTodo: function(todo) {
		this.todos.push(todo);
		this.displayTodos();
	}, 
	changeTodo: function(position, newValue) {
		this.todos[position] = newValue;
		this.displayTodos();
	}
};

// to delete todos

var todoList = {
	todos: [ 'item-1', 'item-2', 'item-3' ],
	displayTodos: function() {
		console.log('My todos:', this.todos);
	},
	addTodo: function(todo) {
		this.todos.push(todo);
		this.displayTodos();
	},
	changeTodo: function(position, newValue) {
		this.todos[position] = newValue;
		this.displayTodos();
	}, 
	deleteTodo: function(position) {
		this.todos.splice(position, 1);
		this.displayTodos();
	}
};