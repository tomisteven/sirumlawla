import React from "react";
import "./Footer.css";
import logo from "../../assets/image.png";

export default function Footer() {
  return (
    <footer>
      <div class="footer">
        <div class="row">
          <img src={logo} alt=""/>
        </div>
        <div class="row">
          <a href="#">
            <i class="fa fa-whatsapp"></i>
          </a>
          <a href="#">
            <i class="fa fa-instagram"></i>
          </a>
        </div>

        <div class="row">
          <ul>
            <li>
              <a href="#">+54 11 3475 0981</a>
            </li>
            <li>
              <a href="#">Decants 5Ml</a>
            </li>
            <li>
              <a href="#">Envases Originales</a>
            </li>
            <li>
              <a href="#">Envios</a>
            </li>
            <li>
              <a href="#">Puntos de retiro</a>
            </li>
          </ul>
        </div>

        <div class="row">
          SIRUM LAWLA Copyright © 2024 Inferno - All rights reserved || Designed By:
          Factos.dev
        </div>
      </div>
    </footer>
  );
}
