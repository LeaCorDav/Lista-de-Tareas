import React from "react";
import { TodoContext } from "../TodoContext";
import './App.css';
import { TodoCounter } from "../TodoCounter";
import { TodoSearch } from "../TodoSearch";
import { TodoList } from "../TodoList";
import { TodoItem } from "../TodoItem";
import { CreateTodoButton } from "../CreateTodoButton";
import { Background } from '../background';
import linkedIn from "../img/linkedin.png";
import { Modal } from "../Modal";
import { TodoForm } from "../TodoForm";
import { MyLoader } from "../Skeletons/loader";

function AppUI(){
    const {
        error, 
        loading, 
        searchedTodos, 
        toggleCompleteTodo, 
        deleteTodo,
        openModal,
        setOpenModal,
    } = React.useContext(TodoContext);

    return(
        <React.Fragment>
            <Background />

            <div className="container">
                <section className="hero">
                    <h1>Lista de <strong>TAREAS</strong></h1>
                    <p>Escribe las tareas que debes cumplir, catalógalas, configura la fecha límite y crea recordatorios.</p> <br/>
                    <p>¡Conectemos en redes!</p>
                    <a href="https://www.linkedin.com/in/leandro-cordero/" target="_blank">
                        <img src={linkedIn} alt="logo-linkedin" />
                    </a>                
                </section>

                <section className="bloc">
                <TodoCounter /> 
                <TodoSearch />
                <TodoList>
                    {error && <p>Hubo un error. Por favor recarga la página.</p> }
                    {loading && <MyLoader/> }
                    {(!loading && !searchedTodos.length) && <p>¡Crea tu primera tarea!</p> }

                    {searchedTodos.map(todo => (
                    <TodoItem 
                        key={todo.text} 
                        text={todo.text}
                        completed={todo.completed}
                        onComplete = {() => toggleCompleteTodo(todo.text)}
                        onDelete = {() => deleteTodo(todo.text)}
                    />
                    ))}
                </TodoList>
                
                {openModal && (
                    <Modal>
                        <TodoForm/>
                    </Modal>
                )}

                <CreateTodoButton
                    setOpenModal={setOpenModal}
                    openModal={openModal}
                /> 
                </section>
            </div>
        </React.Fragment>
    );
}

export {AppUI};