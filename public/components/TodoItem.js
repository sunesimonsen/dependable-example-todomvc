import { html } from "@dependable/view";
import { classes } from "../utils/classes.js";
import { EditInput } from "./EditInput.js";
import { DestroyButton } from "./DestroyButton.js";

export class TodoItem {
  constructor() {
    this.onChange = (e) => {
      e.preventDefault();

      this.context.api.toggleTodo(this.props.todo);
    };

    this.onDblClick = () => {
      this.props.todo.editing(true);
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
