import { html } from "@dependable/htm";
import { activeTodoCount } from "../state.js";

export class ToggleAll {
  constructor() {
    this.toggleAllTodos = () => {
      this.context.api.toggleAllTodos();
    };
  }

  render() {
    return html`
      <input
        id="toggle-all"
        className="toggle-all"
        type="checkbox"
        .checked=${activeTodoCount() === 0}
        onChange=${this.toggleAllTodos}
      />
      <label for="toggle-all">Mark all as complete</label>
    `;
  }
}
