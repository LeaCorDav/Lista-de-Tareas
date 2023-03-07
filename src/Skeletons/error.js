import React from "react";
import "./error.css";

const Errores = (props) => (
  <div className="error-card">
    <span className="error-check"></span>
    <p className="error-text">No se pudo cargar correctamente. Por favor, actualiza la página</p>
    <span className="error-close"></span>
  </div>
)

export {Errores};