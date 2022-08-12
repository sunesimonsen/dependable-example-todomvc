import { html } from "@dependable/view";

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
