import { html } from "@dependable/view";
import { clearCompleteTodos } from "../model.js";

export class ClearCompletedButton {
  render() {
    return html`
      <button className="clear-completed" onClick=${clearCompleteTodos}>
        Clear completed
      </button>
    `;
  }
}
