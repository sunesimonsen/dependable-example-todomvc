import { html } from "@dependable/htm";

export class ClearCompletedButton {
  constructor() {
    this.onClick = () => {
      this.context.api.clearCompletedTodos();
    };
  }

  render() {
    return html`
      <button className="clear-completed" onClick=${this.onClick}>
        Clear completed
      </button>
    `;
  }
}
