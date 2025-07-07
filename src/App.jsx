
import React from "react";
import { Routes, Route, Link } from "react-router-dom";

function Home() {
  return (
    <div style={{ padding: 20 }}>
      <h1>L&A INMOBILIARIA</h1>
      <nav style={{ marginTop: 20 }}>
        <ul style={{ listStyle: "none", padding: 0 }}>
          <li><Link to="/casas-venta">Casas en Venta</Link></li>
          <li><Link to="/casas-renta">Casas en Renta</Link></li>
          <li><Link to="/departamentos-venta">Departamentos en Venta</Link></li>
          <li><Link to="/departamentos-renta">Departamentos en Renta</Link></li>
        </ul>
      </nav>
    </div>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
}

export default App;
