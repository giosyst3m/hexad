import { Action } from "@ngrx/store";
import { Item } from "src/app/models/item.model";

export const LOAD_ITEMS = '[Items](load)';
export const LOAD_ITEMS_ERROR = '[Items](load) Error';
export const LOAD_ITEMS_SUCCESS = '[Items](load) Success';
export const ADD_ITEM = '[Items](add)';
export const UPDATE_ITEM = '[Items](update)';


export class LoadItems implements Action {
    readonly type = LOAD_ITEMS;
}
export class LoadItemsError implements Action {
    readonly type = LOAD_ITEMS_ERROR;

    constructor( public payload: any ){}
}
export class LoadItemsSuccess implements Action {
    readonly type = LOAD_ITEMS_SUCCESS;

    constructor( public items: any ){}
}
export class AddItemAction implements Action {
    readonly type = ADD_ITEM;

    constructor(public name: string, public category: string, public rating: number) {
        
    }
}
export class UpdateItemAction implements Action {
    readonly type = UPDATE_ITEM;

    constructor( public payload: any ){}
}
export type itemsActions =  LoadItems |
                            LoadItemsError |
                            LoadItemsSuccess |
                            AddItemAction |
                            UpdateItemAction
                            