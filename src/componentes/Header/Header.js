import React from "react";
import "./Header.css";
import logo from "../../assets/logonew.png";

export default function Header() {
  return (
    <div className="cont-super-header">
      <div class="cont-img">
        <img src={logo} alt="logo" />
      </div>
    </div>
  );
}
