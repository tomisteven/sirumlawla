import React from "react";
import "./BtnWhatsApp.css";

export default function BtnWhatsApp() {
  return (
    <div className="cont-btn-whats">
      <a
        href="https://wa.me/5491130775555"
        target="_blank"
        rel="noreferrer"
        className="btn-whatsapp"
      >
        <img
          src="https://img.icons8.com/color/48/000000/whatsapp--v1.png"
          alt="whatsapp"
        />
      </a>
    </div>
  );
}
