import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import ResetOtp from "./components/reset_otp.tsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
// import ResetOtp from "./components/reset_otp.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
    <ResetOtp />
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
