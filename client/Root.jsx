import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";

import App from "./views/index.jsx";
import { AuthProvider } from "./context/user";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";

const Root = (
  <Router>
    <AuthProvider>
      <App />
    </AuthProvider>
  </Router>
);

const root = createRoot(document.getElementById("root"));
root.render(Root);
