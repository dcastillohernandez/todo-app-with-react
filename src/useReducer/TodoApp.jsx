import React, { useReducer } from 'react';
import { todoReducer } from './todoReducer';
import { TodoList } from './TodoList';

const initialState = [
    {
        id: new Date().getTime(),
        description: 'Recolectar la piedra del alma',
        donde: false
    },
    {
        id: new Date().getTime() * 3,
        description: 'Recolectar la piedra del poder',
        donde: false
    }
]

export const TodoApp = () => {

    const [todos, dispatch] = useReducer(todoReducer, initialState)

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

                    <form>
                        <input
                            className="form-control"
                            placeholder="Que hay que hacer..."
                            type="text"
                        />

                        <button
                            type="submit"
                            className='btn btn-outline-primary mt-1'>
                            Agregar
                        </button>
                    </form>
                </div>

            </div>
        </>
    )
}
