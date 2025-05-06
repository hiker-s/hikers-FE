import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./router";
const JAVASCRIPT_KEY = import.meta.env.VITE_APP_JAVASCRIPT_KEY;

if (!window.Kakao.isInitialized()) {
  window.Kakao.init(JAVASCRIPT_KEY);
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
