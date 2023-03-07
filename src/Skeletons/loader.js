import React from "react";
import "./loader.css";

const MyLoader = (props) => (
  <div className="card">
    <span className="check"></span>
    <p className="text">Cargando...</p>
    <span className="close"></span>
  </div>
)

export {MyLoader};