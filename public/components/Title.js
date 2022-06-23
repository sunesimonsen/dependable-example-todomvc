import { html } from "@dependable/view";

export class Title {
  render({ children }) {
    return html`<h1>${children}</h1>`;
  }
}
