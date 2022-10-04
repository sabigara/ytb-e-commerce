import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";

import "./styles/reset.css";
import "./styles/tokens.css";
import "./styles/globals.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
