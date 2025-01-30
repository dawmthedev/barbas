import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/globals.css"; // Ensure CSS loads properly
import App from "./App.jsx"; // This should be correctly linked

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
