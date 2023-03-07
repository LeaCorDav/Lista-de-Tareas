import React from "react";
import { TodoContext } from "../TodoContext";
import "./TodoSearch.css";

function TodoSearch(){
    const { searchValue, setSearchValue } = React.useContext(TodoContext);

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
        onChange={onBusqueda}></input>
    );
}

export {TodoSearch};