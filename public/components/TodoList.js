import { html } from "@dependable/htm";
import { visibleTodos } from "../state.js";
import { TodoItem } from "./TodoItem.js";

export class TodoList {
  render() {
    return html`
      <ul className="todo-list">
        ${visibleTodos().map(
          (todo) => html`<${TodoItem} key=${todo.id} todo=${todo} />`
        )}
      </ul>
    `;
  }
}
