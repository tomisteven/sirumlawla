import React from "react";
import "./Header.css";
import logo from "../../assets/image.png";

export default function Header() {
  return (
    <div className="cont-super-header">
      <div class="cont1"></div>
      <div class="cont-img">

        <img src={logo} alt="logo" />
      </div>
      <div class="cont1"></div>
    </div>
  );
}
