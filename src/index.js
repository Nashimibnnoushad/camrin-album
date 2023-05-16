import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import './index.css';
import Home from './Home/Home';
import App from './App'
import { MissingRoute } from './MissingRoute';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path='/home/:id/:name' element={<Home />} />
      <Route path="*" element={<MissingRoute />} />
    </Routes>
  </BrowserRouter>

);
reportWebVitals();
