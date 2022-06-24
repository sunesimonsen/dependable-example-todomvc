import { computed, observable } from "@dependable/state";
import * as apiFunctions from "./api.js";

export const api = observable(apiFunctions);

export const visibilityFilter = observable("all");

export const allTodos = observable([]);

const createdAtComparison = (a, b) => {
  const aCreatedAt = new Date(a.createdAt);
  const bCreatedAt = new Date(b.createdAt);
  if (aCreatedAt < bCreatedAt) return -1;
  if (aCreatedAt > bCreatedAt) return 1;
  return 0;
};

const sortedTodos = computed(() => allTodos().sort(createdAtComparison));

const visibilityPredicates = {
  active: ({ completed }) => !completed(),
  completed: ({ completed }) => completed(),
  all: () => true,
};

export const visibleTodos = computed(() =>
  sortedTodos().filter(visibilityPredicates[visibilityFilter()])
);

const completedTodos = computed(() =>
  allTodos().filter(visibilityPredicates.completed)
);

const activeTodos = computed(() =>
  allTodos().filter(visibilityPredicates.active)
);

const todosById = computed(() => {
  const index = {};
  for (const todo of allTodos()) {
    index[todo.id] = todo;
  }
  return index;
});

export const activeTodoCount = computed(() => activeTodos().length);

export class Todo {
  constructor({ id, text, createdAt, completed = false }) {
    this.id = id;
    this.text = observable(text);
    this.createdAt = createdAt;
    this.completed = observable(completed);
    this.editing = observable(false);
  }

  toggle() {
    this.completed(!this.completed());
  }

  async save() {
    const response = await api().updateTodo(this.toJSON());
  }

  async destroy() {
    await api().removeTodos({ ids: [this.id] });
    allTodos(allTodos().filter((todo) => todo !== this));
  }

  toJSON() {
    return {
      id: this.id,
      text: this.text(),
      createdAt: this.createdAt,
      completed: this.completed(),
    };
  }
}

export const loadTodos = async () => {
  const response = await api().loadTodos();

  allTodos(response.map((todoData) => new Todo(todoData)));
};

export const createTodo = async ({
  text,
  createdAt = new Date().toISOString(),
}) => {
  const response = await api().createTodo({
    text,
    completed: false,
    createdAt,
  });

  allTodos([...allTodos(), new Todo(response)]);
};

export const toggleAllTodos = async () => {
  const completed = activeTodoCount() !== 0;

  const response = await Promise.all(
    allTodos().map((todo) => api().updateTodo({ ...todo.toJSON(), completed }))
  );

  allTodos().forEach((todo, i) => {
    todo.completed(response[i].completed);
  });
};

export const clearCompleteTodos = async () => {
  const ids = completedTodos().map(({ id }) => id);
  const response = await api().removeTodos({ ids });

  allTodos(allTodos().filter((todo) => !todo.completed()));
};
