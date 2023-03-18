import {ActionTypes} from "../constants/action_types";

const initialState = {
    products: []
}

export const ProductReducer = (state=initialState, {type, payload}) => {
    switch (type) {
        case ActionTypes.SET_PRODUCTS:
            return {...state, products: payload};
    
        default:
            return state;
    }
}