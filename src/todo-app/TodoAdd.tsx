import React from "react";

export const TodoAdd = ({ action }) => {
    return (
        <>
            <form>
                <input
                    type="text"
                    placeholder="¿Que hay que hacer?"
                    className="form-control"
                />

                <button
                    type="submit"
                    className="btn btn-outline-primary mt-1 "
                >
                    Agregar
                </button>
            </form>
        </>
    )
}
