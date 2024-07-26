import React from 'react';

export const TodoItem = ({ todo, onDeleteTodo }) => {
    return (
        <li
            className="list-group-item d-flex justify-content-between">
            <span
                className="align-self-center">
                {todo.description}
            </span>
            <button
                // Aquí le pasamos el id del todo que queremos borrar
                onClick={() => onDeleteTodo(todo.id)}
                className="btn btn-danger">
                Borrar
            </button>
        </li>
    )
}
