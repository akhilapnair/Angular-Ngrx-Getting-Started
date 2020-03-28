import { ProductActions, ProductActionTypes } from './product.action';
import { Product } from '../product';
import * as  fromRoot from '../../state/app.state'
import { createFeatureSelector, createSelector } from '@ngrx/store';

export interface State extends fromRoot.State {
    products: ProductState;
}
export interface ProductState {
    showProductCode: boolean;
    currentProduct: Product;
    Products: Product[];

}
const initialState = {
    showProductCode: true,
    currentProduct: null,
    Products: []
}
const getProductFeatureState = createFeatureSelector<ProductState>('products');

export const getShowProductCode = createSelector(getProductFeatureState,
    state => state.showProductCode);
export const getCurrentProduct = createSelector(getProductFeatureState, state => state.currentProduct);
export const getProduct = createSelector(getProductFeatureState, state => state.Products);
export function reducer(state: ProductState = initialState, action: ProductActions): ProductState {

    switch (action.type) {
        case ProductActionTypes.ToggleProductCode:
            return {
                ...state,
                showProductCode: action.payload,
            };

        case ProductActionTypes.SetCurrentProduct:
            return {
                ...state,
                currentProduct: { ...action.payload }
            };

        case ProductActionTypes.ClearCurrentProduct:
            return {
                ...state,
                currentProduct: null
            }
        default: return state;
    }

}