import { useEffect, useReducer } from 'react';
import { todoReducer } from '../useReducer';

// Usamos el metodo initializerArg del useReducer que lo nombraremos en este caso como init para decir que de el localStorage traeme los todos.
const init = () => {
    // Usamos el JSON.parse para convertir el localStorage a JSON 
    return JSON.parse(localStorage.getItem('todos')) || []; // Como puede ser que este sea un arreglo vacio puede retornar null, entonces decimos que si no tiene entonces retorna un array vacío
}
export const useTodos = () => {

    const [todos, dispatch] = useReducer(todoReducer, [], init)

    /* 
        Necesitamos que cuando cambien los "todos" se ejecute algo, ese algo es un efecto secundario,
        Para eso tenemos el useEffect, que cuando cambian los "todos" se guarden en el localStorage.
    */
    useEffect(() => {
        // Guardamos los todos en el localStorage usando el metodo setItem de localStorage y como en el localStorage solo acepta strings, lo convertimos a string con el metodo JSON.stringify
        localStorage.setItem('todos', JSON.stringify(todos) || []); // Evaluamos que si hay "todos", lo guardamos en el localStorage, de lo contrario, guardamos un array vacío
    }, [todos]);

    const handleNewTodo = (todo) => {
        // Creamos la constante action para enviar la acción
        const action = {
            type: '[TODO] Add Todo',
            payload: todo
        }
        // Enviamos la acción usando el metodo dispatch del useReducer
        dispatch(action);
    }

    // Creamos la función para borrar el todo
    const handleDeleteTodo = (id) => {
        // console.log({ id });
        // Enviamos la acción
        dispatch({
            type: '[TODO] Remove Todo',
            payload: id
        })
    }

    const handleToggleTodo = (id) => {
        // console.log({ id });
        // Enviamos la acción
        dispatch({
            type: '[TODO] Toggle Todo',
            payload: id
        })
    }

    return {
        todos,
        handleDeleteTodo,
        handleToggleTodo,
        handleNewTodo,
        todosCount: todos.length,
        pendingTodosCount: todos.filter(todo => !todo.done).length
    }
}