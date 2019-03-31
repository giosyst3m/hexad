import { Action } from "@ngrx/store";
import { Item } from "src/app/models/item.model";

export const LOAD_ITEMS = '[Items](load)';
export const LOAD_ITEMS_ERROR = '[Items](load) Error';
export const LOAD_ITEMS_SUCCESS = '[Items](load) Success';
export const ADD_ITEM = '[Items](add)';
export const UPDATE_ITEM_RATE = '[Items](update) Rate';
export const RAMDOM_ITEM_RATE = '[Items](update) Ramdom';


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
export class UpdateItemRateAction implements Action {
    readonly type = UPDATE_ITEM_RATE;

    constructor( public id: number, public rate: number ){}
}
export class RamdomItemRateAction implements Action {
    readonly type = RAMDOM_ITEM_RATE;

    constructor( public id: number, public ramdom: number ){}
}
export type itemsActions =  LoadItems |
                            LoadItemsError |
                            LoadItemsSuccess |
                            AddItemAction |
                            UpdateItemRateAction |
                            RamdomItemRateAction
                            