import React from 'react'
import { useForm } from '../hooks/useForm'

export const TodoAdd = ({ onNewTodo }) => {

    const { description, onInputChange, onResetForm } = useForm({
        description: '',
    })

    const onForSubmit = (event) => {
        event.preventDefault();
        if (description.length <= 1) return;

        const newTodo = {
            id: new Date().getTime(),
            donde: false,
            description,
        }

        onNewTodo(newTodo);
    }

    return (
        <form onSubmit={onForSubmit} >
            <input
                className="form-control"
                placeholder="Que hay que hacer..."
                type="text"
                name="description"
                value={description}
                onChange={onInputChange}

            />

            <button
                type="submit"
                className='btn btn-outline-primary mt-1'>
                Agregar
            </button>
        </form>
    )
}
