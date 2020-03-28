import { Product } from './../product';

import { Action } from '@ngrx/store';

export enum ProductActionTypes {
    ToggleProductCode = '[Product]Toggle Product Code',
    SetCurrentProduct = '[Product]Set Current Product',
    ClearCurrentProduct = '[Product]Clear Current Product',
    InitilizeCurrentProduct = '[Product]Initialize Current Product',

}
export class ToggleProductCode implements Action {
    readonly type = ProductActionTypes.ToggleProductCode;
    constructor(public payload: boolean) { }
}
export class SetCurrentProduct implements Action {
    readonly type = ProductActionTypes.SetCurrentProduct;

    constructor(public payload: Product) { }
}
export class ClearCurrentProduct implements Action {
    readonly type = ProductActionTypes.ClearCurrentProduct;
}
export class InitilizeCurrentProduct implements Action {
    readonly type = ProductActionTypes.InitilizeCurrentProduct;
}

export type ProductActions = ClearCurrentProduct
    | SetCurrentProduct
    | ToggleProductCode
    | InitilizeCurrentProduct;
