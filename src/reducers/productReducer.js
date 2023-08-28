
export const productReducer = ( state = [], action) => {

    switch (action.type) {

        case '[Product] - ADD-PRODUCT':
            return [
                ...state,
                action.payload
            ]    
        //console.log('Agregar');
        //    break;

        case '[Product] - DELETE-PRODUCT':
            return action.payload
        //    console.log('delete');
        //    break;

        case '[Product] - EDIT-PRODUCT':
            return action.payload
        //    console.log('edit');
        //    break;
        
        case '[Reset] - RESET':
            return action.payload
        default:
            return state

    }
}