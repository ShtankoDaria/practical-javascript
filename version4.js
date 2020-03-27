//add todo

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
		this.displayTodos();
	}
};

// change the todoText property

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
		this.displayTodos();
	},
	changeTodo: function(position, todoText) {
		this.todos[position].todoText = todoText;
		this.displayTodos();
	}
};

// todoList.toggleCompleted should flip the completed property
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
		this.displayTodos();
	},
	changeTodo: function(position, todoText) {
		this.todos[position].todoText = todoText;
		this.displayTodos();
	},
	toggleCompleted: function(position) {
		var todo = this.todos[position];
		todo.completed = !todo.completed; 
		this.displayTodos();
	}
};