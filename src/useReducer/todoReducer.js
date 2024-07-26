

export const todoReducer = ( initialState = [], action ) => {


    switch (action.type) {
        case 'ABC':
            throw new Error('No se está implementando');
            ;
    
        default:
            return initialState;
    }
    
}