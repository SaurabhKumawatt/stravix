import { useState } from 'react';
import './App.css';
import AppRoutes from "./router/routes";
import { BrowserRouter } from "react-router-dom";



const App = () => {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
};

export default App
