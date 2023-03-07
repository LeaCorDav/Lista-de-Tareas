import React from "react";

/* INGRESAR TAREAS NUEVAS AL LOCAL STORAGE*/
function useLocalStorage(itemName, initialValue) {  
    /* ESTADO DE ERROR */
    const [error, setError] = React.useState(false);
    /* ESTADO DE CARGA */
    const [loading, setLoading] = React.useState(true);
  
    /* ARRAY */
    const [item, setItem] = React.useState(initialValue); /* Asignamos que el array de To Do's usen estados de React */
  
    /* CONSUMO DE DATOS DE TAREAS */
    React.useEffect(() => {
      setTimeout(() => {
        try {
          /* INGRESO DE TAREAS */
          const localStorageItem = localStorage.getItem(itemName);/* Guarda en el localstorage el "API" o array itemName */
          let parsedItem; /* Instanciamos variable donde guardaremos el array de tareas */  
          if (!localStorageItem){
            localStorage.setItem(itemName, JSON.stringify(initialValue));
            parsedItem = initialValue; /* Muestra el array vacio */
          } else {
            parsedItem = JSON.parse(localStorageItem);/* Muestra el array guardado en el local storage */
          }
    
          setItem(parsedItem); /* Actualiza el estado del array de tareas */
          setLoading(false); /* Desactiva el estado de loading */
        } catch (error) {
          setError(error); /* Esto se ejecuta si lo primero NO se puede */
        }
      }, 3000);
    });
  
  
  
    /* GUARDA LOS CAMBIOS DEL ESTADO REACT EN LOCAL STORAGE */
    const savedItem = (newItem) => {
      try {
        const stringItem = JSON.stringify(newItem);
        localStorage.setItem(itemName, stringItem);
        setItem(newItem);
      } catch (error) {
        setError(error);
      }
    };
  
    return {
      item,
      savedItem,
      loading,
      error,
    }; /* Array para 2 estados, debe retornar Objeto para 2+ estados */
}

export {useLocalStorage};