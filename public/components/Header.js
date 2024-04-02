import { html } from "@dependable/htm";

export class Header {
  render({ children }) {
    return html`<header className="header">${children}</header>`;
  }
}
