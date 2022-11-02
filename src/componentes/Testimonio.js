import React from "react";
import "../styles/Testimonio.css";

function Testimonio(props) {
  return (
    <div className="contenedor-testimonio">
      <img
        className="imagen-testimonio"
        src={require(`../images/testimonio-${props.imagen}.jpg`)}
        alt={`Imagen de ${props.nombre}`}
      />
      <div className="contenedor-texto-testimonio">
        <p className="nombre-testimonio">
          <b>{props.nombre}</b> de {props.country}
        </p>
        <p className="cargo-testimonio">
          {props.cargo} en <b>{props.empresa}</b>
        </p>
        <p className="texto-testimonio">"{props.testimonio}"</p>
      </div>
    </div>
  );
}

export default Testimonio;
