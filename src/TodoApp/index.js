import React from "react";
import "./todoapp.css";

function TodoApp({children, loading}) {
    
    return(
        <section className="bloc">
            {/* React.children permite manejar mas de 1 hijo a clineElement. toArray para convertir a su contenido en un array. map para iterar por cada hijo/array. Le aplicamos la function cloneelement a cada hijo/child */}
            {React.Children
            .toArray(children)
            .map(child => React.cloneElement(child, {loading}))}
        </section>
    );
}

export {TodoApp};