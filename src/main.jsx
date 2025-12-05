// main.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import App from "./App.jsx";
import Error from "./error.jsx";
import FormPage from "./form.jsx";
import Conformation from "./conformation.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />

      {/* BOOKING BUTTON → ERROR PAGE */}
      <Route path="/error" element={<Error />} />

      {/* GET IN TOUCH → FORM PAGE */}
      <Route path="/form" element={<FormPage />} />

      {/* SEE MORE → CONFORMATION PAGE */}
      <Route path="/conformation" element={<Conformation />} />
    </Routes>
  </BrowserRouter>
);
