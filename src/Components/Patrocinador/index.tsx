import React from "react";
import "../Patrocinador/Patrocinador.css";

export default function Patrocinador({
  logo,
  link
  }) {

  return (
    <>
      <a href={link} target="_blank"><img src={logo} className="patrocinador" alt="Patrocinador"></img></a>
    </>
  );
}



