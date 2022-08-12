import { html } from "@dependable/view";
import { computed } from "@dependable/state";
import { visibilityFilter } from "../state.js";

export class VisibilityFilter {
  constructor({ value }) {
    this.onClick = (e) => {
      e.preventDefault();
      visibilityFilter(value);
    };

    this.isSelected = computed(() => visibilityFilter() === value);
  }

  render({ value, children }) {
    return html`
      <li>
        <a
          className=${this.isSelected() && "selected"}
          href="#"
          onClick=${this.onClick}
        >
          ${children}
        </a>
      </li>
    `;
  }
}
