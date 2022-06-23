import { html } from "@dependable/view";

export class DestroyButton {
  constructor({ todo }) {
    this.onClick = () => {
      todo.destroy();
    };
  }

  render() {
    return html`<button onClick=${this.onClick} className="destroy"></button> `;
  }
}
