import React, { useState } from "react";

import "./SeccionDupes.css";
import logo from "../../assets/image.png";
import fragancias from "./ImportImages";

import dos from "../../assets/exclusiva2.jpg";
import tres from "../../assets/exclusiva3.webp";
import cuatro from "../../assets/exclusiva4.jpg";
import cinco from "../../assets/exclusiva13.webp";

export default function SeccionDupes() {
  const [imagen, setImagen] = useState("");
  const [mostrarModal, setMostrarModal] = useState(false);

  const abrirModal = (urlImagen) => {
    setImagen(urlImagen);
    setMostrarModal(true);
  };

  const cerrarModal = () => {
    setMostrarModal(false);
  };
  return (
    <div className="cont-slider">
      <div className="cont-slider-titulo">
        <img className="logo-en-fragancias" src={logo} alt="" />
      </div>
      <div className="cont-imagenes-2">
        <div className="cont-imagen-2">
          <img src={dos} alt="imagen exclusiva" />
        </div>
        <div className="cont-imagen-2">
          <img src={cinco} alt="imagen exclusiva" />
        </div>
        <div className="cont-imagen-2">
          <img src={tres} alt="imagen exclusiva" />
        </div>
        <div className="cont-imagen-2">
          <img src={cuatro} alt="imagen exclusiva" />
        </div>

      </div>
      <h2 className="titulo-fragancias">DESCUBRE NUESTRAS FRAGANCIAS</h2>
      <div className="cont-slider-imagenes">
        {fragancias.map((fragancia, index) => (
          <div className="cont-item-slider" key={index}>
            <div className="etiqueta-en-stock">Stock</div>
            <img
              className="img-slider"
              src={fragancia.url}
              alt={fragancia.nombre}
              onClick={() => abrirModal(fragancia.notas)}
            />

            <h3>
              {fragancia.nombre} {fragancia.casa}
            </h3>
            <p className="item-genero">{fragancia.genero}</p>
          </div>
        ))}
      </div>

      {mostrarModal && (
        <div className="modal" onClick={cerrarModal}>
          <div className="modal-contenido" onClick={(e) => e.stopPropagation()}>
            <img className="imagen-grande" src={imagen} alt="" />
            <button className="cerrar-modal" onClick={cerrarModal}>
              X
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
