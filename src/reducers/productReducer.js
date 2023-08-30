import { types } from '../types/types'
export const productReducer = ( state = [], action) => {

    switch (action.type) {

        case types.product.addType:
            return [
                ...state,
                action.payload
            ]    
        //console.log('Agregar');
        //    break;

        case types.product.deleteType:
            return action.payload
        //    console.log('delete');
        //    break;

        case types.product.editType:
            return action.payload
        //    console.log('edit');
        //    break;
        
        case '[Reset] - RESET':
            return action.payload
        default:
            return state

    }
}