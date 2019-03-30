import { Action } from "@ngrx/store";
import { Item } from "src/app/models/item.model";

export const LOAD_ITEMS = '[Items](load)';
export const LOAD_ITEMS_ERROR = '[Items](load) Error';
export const LOAD_ITEMS_SUCCESS = '[Items](load) Success';

export class LoadItems implements Action {
    readonly type = LOAD_ITEMS;
}
export class LoadItemsError implements Action {
    readonly type = LOAD_ITEMS_ERROR;

    constructor( public payload: any ){}
}
export class LoadItemsSuccess implements Action {
    readonly type = LOAD_ITEMS_SUCCESS;

    constructor( public items: Item[] ){}
}

export type itemsActions =  LoadItems |
                            LoadItemsError |
                            LoadItemsSuccess