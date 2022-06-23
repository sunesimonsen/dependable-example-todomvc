import { html } from "@dependable/view";
import { activeTodoCount, toggleAllTodos } from "../model.js";

export class ToggleAll {
  render() {
    return html`
      <input
        id="toggle-all"
        className="toggle-all"
        type="checkbox"
        .checked=${activeTodoCount() === 0}
        onChange=${toggleAllTodos}
      />
      <label for="toggle-all">Mark all as complete</label>
    `;
  }
}
