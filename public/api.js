/* global localStorage:false */
import { allTodos, activeTodoCount, completedTodos } from "./state.js";
import { Todo } from "./models/Todo.js";

export class Api {
  loadTodos() {
    const todos = Object.entries(localStorage)
      .filter(([key]) => key.startsWith("dependable.todo.entities"))
      .map(([key, value]) => Todo.fromJSON(value));

    allTodos(todos);
  }

  saveTodo(todo) {
    localStorage.setItem(
      `dependable.todo.entities.${todo.id}`,
      JSON.stringify(Todo.toJSON(todo))
    );
  }

  nextId() {
    let nextId = parseInt(localStorage.getItem("dependable.todo.nextId"));

    if (isNaN(nextId)) {
      nextId = 0;
    } else {
      nextId++;
    }

    localStorage.setItem("dependable.todo.nextId", nextId);

    return nextId;
  }

  createTodo({ text, createdAt = new Date().toISOString() }) {
    const todo = Todo.create({ id: String(this.nextId()), text, createdAt });

    this.saveTodo(todo);

    allTodos([...allTodos(), todo]);
  }

  removeTodos(todosToBeRemoved) {
    for (const todo of todosToBeRemoved) {
      localStorage.removeItem(`dependable.todo.entities.${todo.id}`);
    }

    allTodos(allTodos().filter((todo) => !todosToBeRemoved.includes(todo)));
  }

  removeTodo(todo) {
    this.removeTodos([todo]);
  }

  toggleAllTodos() {
    const completed = activeTodoCount() !== 0;

    allTodos().forEach((todo) => {
      todo.completed(completed);
      this.saveTodo(todo);
    });
  }

  toggleTodo(todo) {
    Todo.toggle(todo);

    this.saveTodo(todo);
  }

  clearCompletedTodos() {
    this.removeTodos(completedTodos());
  }
}
