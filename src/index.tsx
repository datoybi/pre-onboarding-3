import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import ReactDOM from "react-dom/client";
import App from "./App";
import { SuggestionContextProvider } from "./contexts/SuggestionContext";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <SuggestionContextProvider>
      <Router>
        <App />
      </Router>
    </SuggestionContextProvider>
  </React.StrictMode>
);
