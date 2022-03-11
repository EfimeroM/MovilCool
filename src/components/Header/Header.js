import React from "react";
import { Search } from "../../components/Header/Search/Search";
import { TopHeader } from "./TopHeader";
import { BiUserCircle } from "react-icons/bi";
import { FaShoppingCart } from "react-icons/fa";
import { NavBar } from "../Header/NavBar/NavBar";
import { Link } from "react-router-dom";

import "./Header.scss";

export const Header = () => {
  return (
    <div id="header">
      <TopHeader />
      <div id="logo">
        <Link to={"/"}>
          <img src="./img/logo/logo-movilcool-color.png" alt="logo movilcool" />
        </Link>
      </div>
      <Search />
      <NavBar />
      <div id="profile-cart">
        <div id="profile">
          <BiUserCircle id="profile-icon" />
          <p>Mi perfil</p>
        </div>
        <div id="cart">
          <div id="cart-box">
            <FaShoppingCart id="icon" />
          </div>
        </div>
      </div>
    </div>
  );
};
