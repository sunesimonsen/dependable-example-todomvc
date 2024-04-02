import { html } from "@dependable/htm";

export class EditInput {
  constructor({ todo }) {
    this.onKeyDown = (e) => {
      if (e.code === "Enter") {
        todo.text(e.target.value.trim());
        todo.editing(false);
        this.context.api.saveTodo(todo);
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
