import { render } from "solid-js/web";
import App from "@/App";
import "@/styles/reset.scss";

const root = document.getElementById("root");

if (import.meta.env.DEV && !(root instanceof HTMLElement)) {
  throw new Error("Failed to find root");
}

render(() => <App />, root!);
