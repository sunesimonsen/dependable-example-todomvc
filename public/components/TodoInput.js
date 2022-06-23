import { html } from "@dependable/view";
import { createTodo } from "../model.js";

export class TodoInput {
  constructor() {
    this.onKeyDown = (e) => {
      if (e.code === "Enter") {
        createTodo({ text: e.target.value.trim() });
        e.target.value = "";
      }
    };
  }

  render() {
    return html`
      <input
        className="new-todo"
        placeholder="What needs to be done?"
        autofocus
        onKeyDown=${this.onKeyDown}
      />
    `;
  }
}
