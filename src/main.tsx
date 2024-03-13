import React from "react";
import ReactDOM from "react-dom/client";
// moved here BrowserRouter
import { BrowserRouter } from "react-router-dom";
import App from "./components/App/App.tsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
