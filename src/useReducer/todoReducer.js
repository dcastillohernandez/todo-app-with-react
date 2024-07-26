

export const todoReducer = (initialState = [], action) => {


    switch (action.type) {
        case '[TODO] Add Todo':
            return [...initialState, action.payload]; // Devuelve un nuevo arreglo con el nuevo todo, ya que lo traemos en el payload

        case '[TODO] Remove Todo':
            return initialState.filter(todo => todo.id !== action.payload); // Devuelve un nuevo arreglo de "todos" siempre y cuando el id no coincida con el que enviamos en el payload

        default:
            return initialState;
    }

}