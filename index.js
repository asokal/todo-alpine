function todoApp() {
	return {
		current: {
			task: '',
			category: 'Личное',
		},

		todos: [
			{
				id: 3,
				task: 'Помыть посуду',
				category: 'Личное',
				done: false,
			},

			{
				id: 2,
				task: 'Вынести мусор',
				category: 'Личное',
				done: true,
			},

			{
				id: 1,
				task: 'Разработать приложение',
				category: 'Работа',
				done: false,
			},
		],

		categories: ['Личное', 'Работа', 'Семья'],

		visibility: 'Все',

		addTodo() {
			if (
				this.current.task.trim() === '' ||
				this.current.category === null
			) {
				return;
			}

			this.todos.unshift({
				id: Date.now(),
				task: this.current.task,
				category: this.current.category,
				done: false,
			});

			this.current.task = '';
		},

		removeTodo(id) {
			this.todos = this.todos.filter((todo) => id !== todo.id);
		},
	};
}
