import React from "react";
import "./TodoList.css";

function TodoList(props) {
    return(
        <section className="lista">
            {props.error && props.onError()}
            {props.loading && props.onLoading()}
            {(!props.loading && !props.totalTodos) && props.onEmpty()}
            {(!props.loading && !props.searchedTodos.length && !!props.totalTodos) && props.onEmptySearch(props.searchText)}
            
            {props.searchedTodos.map(props.onRender)}

            <ul>
                {props.children}
            </ul>
        </section>
    );
}

export {TodoList};