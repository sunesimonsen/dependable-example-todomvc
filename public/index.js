import "@dependable/vite";
import { render } from "@dependable/view";
import { html } from "@dependable/htm";
import { RootView } from "./components/RootView.js";
import { Api } from "./Api.js";

render(
  html`
    <Context api=${new Api()}>
      <${RootView} />
    <//>
  `,
  document.getElementById("app"),
);
