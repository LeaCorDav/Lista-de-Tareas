import React from "react";
import { withStorageListener } from "./withStorageListener";
import "./changeAlert.css";

function ChangeAlert({show, toggleSyncronize}){
    if(show){
        return (
            <section className="change_container">
                <h3>Hubo cambios que no se han actualizado en esta ventana...</h3>
                <button
                    onClick={toggleSyncronize}
                >
                    Sincronizar cambios
                </button>
            </section>
        );
    } else {
        return null;
    }
}

const ChangeAlertWithStorageListener = withStorageListener(ChangeAlert);

export {ChangeAlertWithStorageListener};