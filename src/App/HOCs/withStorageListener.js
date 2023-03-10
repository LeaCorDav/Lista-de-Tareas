import React from "react";

/* Crear el HOC con utilizando de parametro variable el Component al que se le va a aplicar algo*/
function withStorageListener(Component){   

    /* Otra funcion para este sí escuche los cambios en su estado*/
    return function ListenerComponent(props){
        /* Creamos el estado que escuchará los cambios y lo seteamos a falso por defecto para que no se active sin un trigger */
        const [storageChange, setStorageChange] = React.useState(false);
        /* Agregamos un escuchador de eventos del storage que es donde se guardan los datos caché*/
        window.addEventListener("storage", (change) => {
            /* Si cambia algo guardado el storage bajo el nombre TODOS_V1 entonces... */
            if(change.key==="TODOS_V1"){
                setStorageChange(true); /* Cambia el estado a true y avisa que hubo cambios */

            } 
        });

        const toggleSync = () => {
            setStorageChange(false);
            props.sync(); /* usa las propiedades del componente en App/Index.js */
        }

        /* Retornamos el componente que usamos de parametro  y aplicamos nuevos parametros "show" y "toggleShow" para que reaccione a los cambios en el Estado*/
        return (
            <Component 
                show={storageChange} 
                toggleSyncronize={toggleSync}
            />
        );
    }
}

export {withStorageListener};