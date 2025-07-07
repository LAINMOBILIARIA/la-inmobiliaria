
import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";

export default function App() {
  return (
    <div className="container">
      <header>
        <h1>L&A INMOBILIARIA</h1>
        <nav>
          <ul>
            <li><Link to="/casas-venta">Casas Venta</Link></li>
            <li><Link to="/casas-renta">Casas Renta</Link></li>
            <li><Link to="/departamentos-venta">Departamentos Venta</Link></li>
            <li><Link to="/departamentos-renta">Departamentos Renta</Link></li>
          </ul>
        </nav>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </main>
    </div>
  );
}
