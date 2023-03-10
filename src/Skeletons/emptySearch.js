import React from "react";
import "./empty.css";

const EmptySearch = (props) => (  
  <div className="empty-card">
    <span className="empty-check"></span>
    <p className="empty-text">No hubo resultados para {props.searchText} . Prueba con otra palabra.</p>
    <span className="empty-close"></span>
  </div>
)

export {EmptySearch};