import React, { useReducer } from 'react';
import { todoReducer } from './todoReducer';
import { TodoList } from './TodoList';
import { TodoAdd } from './TodoAdd';

const initialState = [
    {
        id: new Date().getTime(),
        description: 'Recolectar la piedra del alma',
        donde: false
    },
    {
        id: new Date().getTime() * 3,
        description: 'Recolectar la piedra del tiempo',
        donde: false
    }
]

export const TodoApp = () => {

    const [todos, dispatch] = useReducer(todoReducer, initialState)

    const handleNewTodo = (todo) => {
        console.log({ todo });
    }

    return (
        <>
            <h1>TodoApp: 10, <small>Pendientes: 2</small></h1>
            <hr />

            <div className="row">
                <div className="col-7">
                    <TodoList todos={todos} />
                </div>

                <div className="col-5">
                    <h4>Agregar Todo</h4>
                    <br />

                    {/* Para mejorar la lectura del código estoy poniendo que se recibe el todo y se lo envio como referencia a la función pero de igual forma de puede hacer handleNewTodo solamente sin necesidad de pasarle el todo ya que desde es6 ya no es necesario pues pasa automáticamente por referencia  */}
                    <TodoAdd onNewTodo={todo => handleNewTodo(todo)} />
                </div>

            </div>
        </>
    )
}
