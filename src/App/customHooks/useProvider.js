import React from "react";
import {useLocalStorage} from "./useLocalStorage";

function useProvider() {
    /* Llama al custom Hook de LocalStorage */
    const {
        item: todos,
        savedItem: saveTodos,
        loading,
        error,
        sync
    } = useLocalStorage("TODOS_V1", []); /* Así solo escucha los cambios en TODOS_V1 y no todo */
    
    /* CONTABILIZAR TAREAS TOTALES Y COMPLETADAS */  
    const completedTodos = todos.filter(tarea => !!tarea.completed).length; /* Filtra el array de To Do's del estadoReact con solo las compeltadas y las contabiliza */
    const totalTodos = todos.length; /* Contabiliza todo el array de To Do's */

    /* FILTRAR BUSQUEDAS */
    const [searchValue, setSearchValue] = React.useState(""); /* Creamos un nuevo estado de React vacío */
    let searchedTodos = []; /* Creamos un array vacío */
    if (!searchValue.length >= 1) {
    searchedTodos = todos; /* Si no se escribe nada, se muestra todo el array */
    } else {
    searchedTodos = todos.filter( tarea => { 
        const todoText = tarea.text.toLowerCase(); /* todo los array lo pone en minusculas */
        const searchText = searchValue.toLowerCase(); /* todo lo que se escriba en el input lo pone en minusculas */

        return todoText.includes(searchText); /* Renderiza los array que incluyan los datos que se escriben en el input */
    });
    }  
    
    /* MARCAR TAREAS COMPLETADAS */
    const toggleCompleteTodo = (text) => {
        const todoIndex = todos.findIndex(todo => todo.text === text);
        const newTodos = [...todos];
        newTodos[todoIndex].completed = !newTodos[todoIndex].completed;
        saveTodos(newTodos);
    }

    /* ELIMINAR TAREAS */
    const deleteTodo = (text) => {
        const todoIndex = todos.findIndex(todo => todo.text === text);
        const newTodos = [...todos];
        newTodos.splice(todoIndex, 1);
        saveTodos(newTodos);
    }

    /* ABRIR Y CERRAR MODAL */
    const [openModal, setOpenModal] = React.useState(false);

    /* AÑADIR TAREA */
    const addTodo = (text) => {
        const newTodos = [...todos];
        newTodos.push({
            text,
            completed: false,
        });
        saveTodos(newTodos);
    }

    return {
        error,
        loading,
        totalTodos,
        completedTodos,
        searchValue,
        setSearchValue,
        searchedTodos,
        toggleCompleteTodo,
        deleteTodo,
        addTodo,
        openModal,
        setOpenModal,
        sync      
    };
}

export {useProvider};