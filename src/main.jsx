import React from "react";
import App from "./App.jsx";
import "./index.css";

import { store } from "../store.js";
import { createRoot } from "react-dom/client";
const root = createRoot(document.getElementById("root"));

const render = () => {
  root.render(<App state={store.getState()} dispatch={store.dispatch} />);
};

render();

store.subscribe(render);
