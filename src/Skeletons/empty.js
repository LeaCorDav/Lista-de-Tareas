import React from "react";
import "./empty.css";

const Empty = (props) => (
  <div className="empty-card">
    <span className="empty-check"></span>
    <p className="empty-text">Haz click en el ícono de "+" en la parte inferior para crear una nueva tarea</p>
    <span className="empty-close"></span>
  </div>
)

export {Empty};