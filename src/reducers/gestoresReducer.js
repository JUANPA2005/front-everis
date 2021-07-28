import {
     SET_LISTA_GESTORES
} from "../actions/gestores"

export const gestoresReducer = (
    state = {
        listaGestores: []
    }, action
) => {
    switch (action.type) {
        
        case SET_LISTA_GESTORES:
            return Object.assign({}, state, {
                listaGestores: action.listaGestores
            });

        default:
            return state;
    }
}