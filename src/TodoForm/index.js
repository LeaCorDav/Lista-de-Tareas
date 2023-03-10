import React from "react";
import "./todoform.css";

function TodoForm({addTodo, setOpenModal,}){
    /* Nuevo array vacio y su estado para actualizarlo */
    const [newTodoValue, setNewTodoValue] = React.useState("");

    /* Para escuchar los cambios de valores en el input */
    const onChange = (event) => {
        setNewTodoValue(event.target.value);
    };
        
    const onCancel = () => {
        setOpenModal(false);
    };
    const onCreate = (event) => {
        event.preventDefault();
        addTodo(newTodoValue);
        setOpenModal(false);
    };

    return(
        <form onSubmit={onCreate}>
            <label>Nueva tarea</label>
            <textarea 
                value={newTodoValue}
                onChange={onChange}
                placeholder="Escribe una nueva tarea" 
            />
            <div className="botones">
                <button type="button" onClick={onCancel}>Cancelar</button>
                <button type="submit" >Añadir</button>
            </div>
        </form>
    );
}

export {TodoForm};