

export const TodoReducer = (initialState = [], action) => {

    switch (action.type) {
        case 'ABC':
            throw new Error('action.type no implementado');

        default:
            return initialState;
    }


};  