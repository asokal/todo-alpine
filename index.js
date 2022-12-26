function todoApp() {
	return {
		todos: [
			{
				id: 1,
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
				id: 3,
				task: 'Разработать приложение',
				category: 'Работа',
				done: false,
			},
		],

		current: {
			task: '',
			category: 'Личное',
		},

		visibility: 'Все',

		addTodo() {
			if (
				this.current.task.trim() === '' ||
				this.current.category === null
			) {
				return;
			}

			this.todos.push({
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
