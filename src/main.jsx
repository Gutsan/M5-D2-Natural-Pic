import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { ContextAPIProvider } from "./context/ContextAPI.jsx";
import { ContextFAVProvider } from "./context/contexFavorite.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ContextAPIProvider>
      <ContextFAVProvider>
        <App />
      </ContextFAVProvider>
    </ContextAPIProvider>
  </React.StrictMode>
);
