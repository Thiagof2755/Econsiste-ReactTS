import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom"; // Import BrowserRouter, Routes, and Route
import './index.scss'
import App from "./App.tsx";
import Cookies from 'js-cookie';

import Home from "./Pages/Home";

// Define um cookie com SameSite=None; Secure
Cookies.set('Cookie', 'Cookie', { sameSite: 'None', secure: true });

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<App />}>
          <Route path="/" element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);

