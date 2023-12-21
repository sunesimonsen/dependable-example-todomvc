import "@dependable/vite";
import { html, render } from "@dependable/view";
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
