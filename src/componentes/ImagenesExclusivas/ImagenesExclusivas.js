import React from "react";
import "./ImagenesExclusivas.css";

import cinco from "../../assets/exclusiva5.webp";
import seis from "../../assets/exclusiva6.jpg";
import siete from "../../assets/exclusiva7.jpg";

import diez from "../../assets/exclusiva10.jpg";
import once from "../../assets/exclusiva11.webp";
import doce from "../../assets/exclusiva12.webp";

export default function ImagenesExclusivas() {
  return (
    <div className="cont-imagenes-exclusivas">
      <div className="cont-imagenes">
        {/* <div className="cont-imagen-2">
          <img src={uno} alt="imagen exclusiva" />
        </div>
        <div className="cont-imagen">
          <img src={nueve} alt="imagen exclusiva" />
        </div>
        <div className="cont-imagen">
          <img src={ocho} alt="imagen exclusiva" />
        </div> */}
        <div className="cont-imagen">
          <img src={cinco} alt="imagen exclusiva" />
        </div>
        <div className="cont-imagen">
          <img src={once} alt="imagen exclusiva" />
        </div>
        <div className="cont-imagen">
          <img src={doce} alt="imagen exclusiva" />
        </div>
        <div className="cont-imagen">
          <img src={diez} alt="imagen exclusiva" />
        </div>
      </div>
      <div className="cont-imagen">
        <img src={seis} alt="imagen exclusiva" />
      </div>
      <div className="cont-imagen">
        <img src={siete} alt="imagen exclusiva" />
      </div>
    </div>
  );
}
