import { html } from "@dependable/view";

export class TodoInput {
  constructor() {
    this.onKeyDown = (e) => {
      if (e.code === "Enter") {
        this.context.api.createTodo({ text: e.target.value.trim() });
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
