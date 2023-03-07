import React from "react";
import { TodoProvider } from "../TodoContext";
import { AppUI } from "./AppUI";

const defTodos = [
  {text: "Aprender React", completed: true},
  {text: "Repasar Bootstrap", completed: true},
  {text: "Tramitar permiso de trabajo", completed: false},
  {text: "Rediseñar portafolio", completed: false},
];


function App() {  
  return (
    <TodoProvider>
      <AppUI />
    </TodoProvider>
  );
}

export default App;
