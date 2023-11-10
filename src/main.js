import "./app.css";
import App from "./App.svelte";
import { pymChild } from "./pymDefine";
import { setDatavizTitle } from "./analytics";
setDatavizTitle("immigrants-safety-net-access");

const app = new App({
  target: document.getElementById("app"),
});

export default app;
