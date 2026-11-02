import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import "./index.css";
import "./i18n";
import App from "./App.tsx";

// The server shell keeps a useful no-JavaScript description. Once the client
// starts, Helmet owns route-specific descriptions and must not compete with it.
document.querySelector('meta[data-static-description="true"]')?.remove();
document.querySelector('title[data-static-title="true"]')?.remove();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <HelmetProvider>
      <App />
    </HelmetProvider>
  </StrictMode>
);
