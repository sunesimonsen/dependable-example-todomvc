import { html, render } from "@dependable/view";
import { RootView } from "./components/RootView.js";
import { loadTodos } from "./model.js";

loadTodos();

render(html`<${RootView} />`, document.getElementById("app"));
