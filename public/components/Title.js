import { html } from "@dependable/htm";

export class Title {
  render({ children }) {
    return html`<h1>${children}</h1>`;
  }
}
