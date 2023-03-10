import React from "react";
import "./TodoCounter.css";

function TodoCounter({totalTodos, completedTodos, loading}){   

    return (
        <h2 className={`TodoCounter ${!!loading && "TodoCounter--loading"}`}> {/* concatena funcion para validar escenarios */}
            Has completado {completedTodos} de {totalTodos} tareas
        </h2>
    );
}

export {TodoCounter};