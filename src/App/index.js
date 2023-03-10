import React from "react";
import { useProvider } from "./customHooks/useProvider";
import './App.css';
import { TodoApp } from "../TodoApp";
import { TodoCounter } from "../TodoCounter";
import { TodoSearch } from "../TodoSearch";
import { TodoList } from "../TodoList";
import { TodoItem } from "../TodoItem";
import { CreateTodoButton } from "../CreateTodoButton";
import { Background } from '../background';
import linkedIn from "../img/linkedin.png";
import { Modal } from "../Modal";
import { TodoForm } from "../TodoForm";
import { MyLoader } from "../Skeletons/loader.js";
import { Empty } from "../Skeletons/empty.js";
import { Errores } from "../Skeletons/error";
import { EmptySearch } from "../Skeletons/emptySearch.js";
import { ChangeAlertWithStorageListener } from "./HOCs/changeAlert.js";

function App() {  
  const {
    error, 
    loading, 
    searchedTodos, 
    toggleCompleteTodo, 
    addTodo,
    deleteTodo,
    openModal,
    setOpenModal,
    totalTodos, 
    completedTodos,
    searchValue,
    setSearchValue,
    sync
  } = useProvider();

  return(
    <React.Fragment>
      <Background />

      <div className="container">
        <section className="hero">
          <h1>Lista de <strong>TAREAS</strong></h1>
          <p>Crea tu propia lista de pendientes que debes cumplir para que siempre las tengas a la mano. Luego puedes marcarlas como completadas y eliminar las que hayas terminado.</p> <br/>
          <p>¡Conectemos en redes!</p>
          <a href="https://www.linkedin.com/in/leandro-cordero/" target="_blank" rel="noreferrer">
              <img src={linkedIn} alt="logo-linkedin" />
          </a>                
        </section>

        <TodoApp loading={loading}>
          <TodoCounter 
            totalTodos = {totalTodos}
            completedTodos = {completedTodos}
          /> 

          <TodoSearch 
            searchValue = {searchValue}
            setSearchValue = {setSearchValue}
          />
          
          <TodoList 
            /* Props del Hook useProvider */
            error={error}
            searchedTodos={searchedTodos}
            totalTodos={totalTodos}
            /* Render functions */
            onError = {() => <Errores/>}
            onLoading = {() => <MyLoader/>}
            onEmpty = {() => <Empty/>}
            onEmptySearch = {() => <EmptySearch
              searchText={searchValue}
            />}
            onRender = {todo => (
              <TodoItem 
                key={todo.text} 
                text={todo.text}
                completed={todo.completed}
                onComplete = {() => toggleCompleteTodo(todo.text)}
                onDelete = {() => deleteTodo(todo.text)}
              />)
            } />
        </TodoApp>
            
        {openModal && (
          <Modal>
              <TodoForm
                addTodo={addTodo}
                setOpenModal={setOpenModal}
              />
          </Modal>
        )}

        <CreateTodoButton
          setOpenModal={setOpenModal}
          openModal={openModal}
        />
      </div>

      <ChangeAlertWithStorageListener
        sync={sync}
      />
    </React.Fragment>
  );
}

export default App;
