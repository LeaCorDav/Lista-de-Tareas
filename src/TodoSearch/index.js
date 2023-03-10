import React from "react";
import "./TodoSearch.css";

function TodoSearch({searchValue, setSearchValue, loading}){
    /* Escucha los eventos o cambios en el input */
    const onBusqueda = (event) => {
        console.log(event.target.value);
        setSearchValue(event.target.value);
    };

    return (
        <input 
        className="TodoSearch" 
        placeholder="Busca tu tarea"
        value={searchValue}
        onChange={onBusqueda}
        disabled={loading}
        />
    );
}

export {TodoSearch};