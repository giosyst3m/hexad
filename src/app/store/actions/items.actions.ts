import { Action } from "@ngrx/store";
import { Item } from "src/app/models/item.model";

// List of Const to all Actions items
export const LOAD_ITEMS = '[Items](load)';
export const LOAD_ITEMS_ERROR = '[Items](load) Error';
export const LOAD_ITEMS_SUCCESS = '[Items](load) Success';
export const ADD_ITEM = '[Items](add)';
export const UPDATE_ITEM_RATE = '[Items](update) Rate';
export const RAMDOM_ITEM_RATE = '[Items](update) Ramdom';


/**
 * Class to load all items
 */
export class LoadItems implements Action {
    readonly type = LOAD_ITEMS;
}
/**
 * Class to get error when try to load items
 */
export class LoadItemsError implements Action {
    readonly type = LOAD_ITEMS_ERROR;

    /**
     * Get error information
     * @param payload any information error
     */
    constructor( public payload: any ){}
}
/**
 * Class to confirm when load items success
 */
export class LoadItemsSuccess implements Action {
    readonly type = LOAD_ITEMS_SUCCESS;
    /**
     * 
     * @param items any get all items in array
     */
    constructor( public items: any ){}
}
/**
 * Class to add a new items to the list in store.
 */
export class AddItemAction implements Action {
    readonly type = ADD_ITEM;

    /**
     * Data from a new item
     * @param name string title 
     * @param category string name category
     * @param rating number rate
     */
    constructor(public name: string, public category: string, public rating: number) {
        
    }
}
/**
 * Class to update Rate by ID item
 */
export class UpdateItemRateAction implements Action {
    readonly type = UPDATE_ITEM_RATE;

    /**
     * Get Data to update a item by ID
     * @param id number ID item
     * @param rate number new rate
     */
    constructor( public id: number, public rate: number ){}
}
/**
 * Class to save Ramdom Rate
 */
export class RamdomItemRateAction implements Action {
    readonly type = RAMDOM_ITEM_RATE;

    /**
     * Get data to update rate from it tiem
     * @param id number item id
     * @param ramdom number new rate ramdom
     */
    constructor( public id: number, public ramdom: number ){}
}
// Create Type Variable only can use a this actions.
export type itemsActions =  LoadItems |
                            LoadItemsError |
                            LoadItemsSuccess |
                            AddItemAction |
                            UpdateItemRateAction |
                            RamdomItemRateAction
                            