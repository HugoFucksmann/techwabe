import React from "react";
import "./index.css";
const BottomNavBar = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <nav className="navClass">
        <ul>
          <li>
            <a href="#inicio">
              <span>inicio</span>
            </a>
          </li>
          <li>
            <a href="#servicios">
              <span>Servicios</span>
            </a>
          </li>
          <li>
            <a href="#proyectos">
              <span>Proyectos</span>
            </a>
          </li>
          <li>
            <a href="#planes">
              <span>Planes</span>
            </a>
          </li>
          <li>
            <a href="#contacto">
              <span>Contactanos</span>
            </a>
          </li>
        </ul>
        <div className="backdrop"></div>
      </nav>
    </div>
  );
};

export default BottomNavBar;
