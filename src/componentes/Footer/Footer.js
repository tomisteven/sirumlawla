import React from "react";
import "./Footer.css";
import logo from "../../assets/logonew.png";

export default function Footer() {
  return (
    <footer>
      <div class="footer">
        <div class="row">
          <img src={logo} alt=""/>
        </div>
        <div class="row">
          <a href="https://wa.link/1e1t0d">
            <i class="fa fa-whatsapp"></i>
          </a>
          <a href="https://wa.link/1e1t0d">
            <i class="fa fa-instagram"></i>
          </a>
        </div>

        <div class="row">
          <ul>
            <li>
              <a href="https://wa.link/1e1t0d">+54 11 3475 0981</a>
            </li>
            <li>
              <a href="https://wa.link/1e1t0d">Decants 5ml</a>
            </li>
            <li>
              <a href="https://wa.link/1e1t0d">Envases Originales</a>
            </li>
            <li>
              <a href="https://wa.link/1e1t0d">Envios a todo el pais</a>
            </li>
            <li>
              <a href="https://wa.link/1e1t0d">Puntos de retiro</a>
            </li>
          </ul>
        </div>

        <div class="row">
          SIRUN LAWLA Copyright © 2024 All rights reserved || Designed By:
          Factos.dev
        </div>
      </div>
    </footer>
  );
}
