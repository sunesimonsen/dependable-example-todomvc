import { html } from "@dependable/htm";

import { activeTodoCount } from "../state.js";

import { VisibilityFilter } from "./VisibilityFilter.js";
import { ClearCompletedButton } from "./ClearCompletedButton.js";

export class Footer {
  render() {
    return html`
      <footer className="footer">
        <span className="todo-count"
          ><strong>${activeTodoCount()}</strong> item left</span
        >
        <ul className="filters">
          <${VisibilityFilter} value="all">All<//>
          <${VisibilityFilter} value="active">Active<//>
          <${VisibilityFilter} value="completed">Completed<//>
        </ul>
        <${ClearCompletedButton} />
      </footer>
    `;
  }
}
