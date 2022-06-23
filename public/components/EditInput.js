import { html } from "@dependable/view";

export class EditInput {
  constructor({ todo }) {
    this.onKeyDown = (e) => {
      if (e.code === "Enter") {
        todo.text(e.target.value.trim());
        todo.editing(false);
        todo.save();
        e.target.value = "";
      }
    };

    this.onBlur = () => {
      todo.editing(false);
    };

    this.inputRef = (ref) => {
      this.input = ref;
    };
  }

  didMount() {
    this.input.focus();
  }

  render({ todo }) {
    return html`
      <input
        ref=${this.inputRef}
        className="edit"
        .value=${todo.text()}
        onKeyDown=${this.onKeyDown}
        onBlur=${this.onBlur}
      />
    `;
  }
}
