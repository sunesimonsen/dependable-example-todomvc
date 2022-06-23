import { html } from "@dependable/view";

export class Header {
  render({ children }) {
    return html`<header className="header">${children}</header>`;
  }
}
