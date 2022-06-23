import { html } from "@dependable/view";
import { classes } from "../utils/classes.js";
import { EditInput } from "./EditInput.js";
import { DestroyButton } from "./DestroyButton.js";

export class TodoItem {
  constructor({ todo }) {
    this.onChange = (e) => {
      e.preventDefault();

      todo.toggle();
      todo.save();
    };

    this.onDblClick = () => {
      todo.editing(true);
    };
  }

  renderInput({ todo }) {
    if (!todo.editing()) return null;

    return html`<${EditInput} todo=${todo} />`;
  }

  render({ todo }) {
    return html`
      <li
        className=${classes(
          todo.editing() && "editing",
          todo.completed() && "completed"
        )}
      >
        <div className="view">
          <input
            className="toggle"
            type="checkbox"
            onChange=${this.onChange}
            .checked=${todo.completed()}
          />
          <label onDblClick=${this.onDblClick}>${todo.text()}</label>
          <${DestroyButton} todo=${todo} />
        </div>
        ${this.renderInput({ todo })}
      </li>
    `;
  }
}
