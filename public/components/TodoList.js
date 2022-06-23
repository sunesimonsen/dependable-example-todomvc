import { html } from "@dependable/view";
import { visibleTodos } from "../model.js";
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
