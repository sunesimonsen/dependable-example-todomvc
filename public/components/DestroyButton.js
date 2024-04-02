import { html } from "@dependable/htm";

export class DestroyButton {
  constructor({ todo }) {
    this.onClick = () => {
      this.context.api.removeTodo(todo);
    };
  }

  render() {
    return html`<button onClick=${this.onClick} className="destroy"></button> `;
  }
}
