export const todoReducer = (initialState = [], action) => {

    switch (action.type) {
        case '[TODO] Add Todo':
            return [...initialState, action.payload]; // Devuelve un nuevo arreglo con el nuevo todo, ya que lo traemos en el payload

        case '[TODO] Remove Todo':
            return initialState.filter(todo => todo.id !== action.payload); // Devuelve un nuevo arreglo de "todos" siempre y cuando el id no coincida con el que enviamos en el payload

        case '[TODO] Toggle Todo':
            // El método map retonra un nuevo arreglo entonces podemos hacer que el todo cambie de estado
            return initialState.map(todo => {

                // Usamos un if para evaluar si el id coincide con el que enviamos en el payload
                if (todo.id === action.payload) {
                    return {
                        ...todo, // Devolvemos el todo sin cambios
                        done: !todo.done // Cambiamos el estado del todo 
                    }
                }
                return todo;
            })

        default:
            return initialState;
    }

}