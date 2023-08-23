
export const productReducer = ( state = [], action) => {

    switch (action.type) {

        case '[Product] - ADD-PRODUCT':
            console.log('Agregar');
            break;

        case '[Product] - DELETE-PRODUCT':
            console.log('delete');
            break;

        case '[Product] - EDIT-PRODUCT':
            console.log('edit');
            break;
    
        default:
            return state

    }
}