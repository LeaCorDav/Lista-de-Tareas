import React from "react";

/* INGRESAR TAREAS NUEVAS AL LOCAL STORAGE*/
function useLocalStorage(itemName, initialValue) {  
    /* ESTADO DE ERROR */
    const [error, setError] = React.useState(false);
    /* ESTADO DE CARGA */
    const [loading, setLoading] = React.useState(true);  
    /* ARRAY */
    const [item, setItem] = React.useState(initialValue); /* Asignamos que el array de To Do's usen estados de React */
    /* ESTADO DE SINCRONIZACION */
    const [sincronize, setSincronize] = React.useState(true);
  
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
          setSincronize(true) /* vuelve a dejarlo en true para que ya no recargue de nuevo */
        } catch (error) {
          setError(error); /* Esto se ejecuta si lo primero NO se puede */
        }
      }, 3000);
    }, [sincronize]/* Agregamos array vacio para que no recargue infinitamente cada 3seg o le damos un nuevo estado para que cada vez que se active ese estado, vuelva a realizar el efecto */);
  
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

    /* Dispara los cambios al estado de sincronize*/
    const sync = () => {
      setItem([]);
      setLoading(true); /* activa el estado de loading */
      setSincronize(false); /* desactiva el estado de sincronizado */
    }
  
    return {
      item,
      savedItem,
      loading,
      error,
      sync
    }; /* Array para 2 estados, debe retornar Objeto para 2+ estados */
}

export {useLocalStorage};