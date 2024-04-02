import { html } from "@dependable/htm";

import { Header } from "./Header.js";
import { Title } from "./Title.js";
import { TodoInput } from "./TodoInput.js";
import { ToggleAll } from "./ToggleAll.js";
import { TodoList } from "./TodoList.js";
import { Footer } from "./Footer.js";

export class RootView {
  didMount() {
    this.context.api.loadTodos();
  }

  render() {
    return html`
      <${Header}>
        <${Title}>todos<//>
        <${TodoInput} />
      <//>
      <section className="main">
        <${ToggleAll} />
        <${TodoList} />
      </section>
      <${Footer} />
    `;
  }
}
