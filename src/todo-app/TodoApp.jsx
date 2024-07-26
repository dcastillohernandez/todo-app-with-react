import { useReducer } from 'react';
import { TodoReducer } from './TodoReducer';

const initialState = [
    {
        id: new Date().getTime(),
        description: 'Recolectar la piedra del Alma',
        done: false
    },
    {
        id: new Date().getTime() * 3,
        description: 'Recolectar la piedra del Alma',
        done: false
    }
]

export const TodoApp = () => {

    const [todos, dispatch] = useReducer(TodoReducer, initialState)
    return (
        <>
            <h1>TodoApp</h1>
            <hr />

            <div className="row">
                <div className="col-7">
                    <ul>
                        <li>Items 1</li>
                        <li>Items 2</li>
                        <li>Items 3</li>
                    </ul>
                </div>
            </div>





        </>
    )
}
