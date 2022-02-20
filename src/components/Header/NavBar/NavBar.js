import React from "react";
import { Link } from "react-router-dom";

import "./NavBar.scss";

export const NavBar = () => {
  return (
    <div id="nav">
      <ul>
        <Link to="/catalogo/celulares" className="link">
          <li>Celulares</li>
        </Link>
        <Link to="/catalogo/accesorios" className="link">
          <li>Accesorios</li>
        </Link>
        <Link to="/menu/promociones" className="link">
          <li>Promociones</li>
        </Link>
        <Link to="/contacto" className="link">
          <li>Contacto</li>
        </Link>
      </ul>
    </div>
  );
};
