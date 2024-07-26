import { useReducer } from 'react';
import { TodoReducer } from './TodoReducer';
import { TodoList } from './TodoList';

const initialState = [
    {
        id: new Date().getTime(),
        description: 'Recolectar la piedra del Alma',
        done: false
    },
    {
        id: new Date().getTime() * 3,
        description: 'Recolectar la piedra del tiempo',
        done: false
    }
]

export const TodoApp = () => {

    const [todos, dispatch] = useReducer(TodoReducer, initialState)

    const handleNewTodo = ( todo ) => {
        console.log({ todo });
    }

    return (
        <>
            <h1>TodoApp: 10, <small>pendientes: 2</small></h1>
            <hr />

            <div className="row">
                <div className="col-7">

                    
                    <TodoList todos={initialState}/>
                    
                </div>

                <div className="col-5">
                    <h4>Agregar Todo</h4>
                    <hr />
                    
                    {/* { id: new Date()..., description: '', done: false } */}
                    <TodoApp action={handleNewTodo} />
                    
                </div>

            </div>
        </>
    )
}
