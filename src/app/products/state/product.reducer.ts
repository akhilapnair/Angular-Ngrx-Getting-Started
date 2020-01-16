import { Product } from '../product';

export interface ProductState {
    showProductCode: boolean;
    currentProduct: Product;
    Products: Product[];

}

export function reducer(state, action) {
    switch (action.type) {
        case 'TOGGLE_PRODUCT_CODE':
            debugger
            console.log('exisatine stste', state);

            return {
                ...state,
                showProductCode: action.payload
            };
        default: return state;
    }

}