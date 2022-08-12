import { computed, observable } from "@dependable/state";

const createdAtComparison = (a, b) => {
  const aCreatedAt = new Date(a.createdAt);
  const bCreatedAt = new Date(b.createdAt);
  if (aCreatedAt < bCreatedAt) return -1;
  if (aCreatedAt > bCreatedAt) return 1;
  return 0;
};

export class Todo {
  static create({ id, text, createdAt, completed = false }) {
    return {
      id,
      text: observable(text),
      createdAt: createdAt,
      completed: observable(completed),
      editing: observable(false),
    };
  }

  static toggle(todo) {
    todo.completed(!todo.completed());
  }

  static sortByCreatedAt(todos) {
    return todos.slice().sort(createdAtComparison);
  }

  static toJSON(todo) {
    return {
      id: todo.id,
      text: todo.text(),
      createdAt: todo.createdAt,
      completed: todo.completed(),
    };
  }

  static fromJSON(data) {
    return Todo.create(JSON.parse(data));
  }
}
