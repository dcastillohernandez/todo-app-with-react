import React from 'react';

export const TodoItem = ({ todo, onDeleteTodo, onToggleTodo }) => {
    return (
        <li
            className="list-group-item d-flex justify-content-between">
            <span
                onClick={() => onToggleTodo(todo.id)}
                // Si el todo es true, le pondremos un 'text-decoration-line-through' de CSS, si no, le quitaremos el 'text-decoration-line-through'
                className={`align-self-center ${(todo.done) ? 'text-decoration-line-through' : ''}`}>
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
