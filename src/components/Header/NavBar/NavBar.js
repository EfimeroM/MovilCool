import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.scss";
export const NavBar = () => {
  return (
    <div id="nav">
      <ul>
        <Link to="/menu/celulares" className="link">
          <li>Celulares</li>
        </Link>
        <Link to="/menu/accesorios" className="link">
          <li>Accesorios</li>
        </Link>
        <Link to="/menu/promociones" className="link">
          <li>Promociones</li>
        </Link>
        <Link to="/menu/contacto" className="link">
          <li>Contacto</li>
        </Link>
      </ul>
    </div>
  );
};
