import { computed, observable } from "@dependable/state";
import { Todo } from "./models/Todo.js";

export const visibilityFilter = observable("all");

export const allTodos = observable([]);

const sortedTodos = computed(() => Todo.sortByCreatedAt(allTodos()));

const visibilityPredicates = {
  active: ({ completed }) => !completed(),
  completed: ({ completed }) => completed(),
  all: () => true,
};

export const visibleTodos = computed(() =>
  sortedTodos().filter(visibilityPredicates[visibilityFilter()])
);

export const completedTodos = computed(() =>
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
