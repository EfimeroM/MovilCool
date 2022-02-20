import React from "react";
import { Link } from "react-router-dom";

import "./NavBar.scss";

export const NavBar = () => {
  return (
    <div id="nav">
      <ul>
        <li>Celulares</li>
        <li>Accesorios</li>
        <li>Promociones</li>
        <li>Contacto</li>
      </ul>
    </div>
  );
};
