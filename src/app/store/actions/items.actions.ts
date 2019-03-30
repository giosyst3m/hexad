import { Action } from '@ngrx/store';
import { Item } from '../../models/item.model';

export const LOAD_ITEMS = '[ITEMS][LOAD]';
export const LOAD_ITEMS_ERROR = '[ITEMS][LOAD][ERROR]';
export const LOAD_ITEMS_SUCCESS = '[ITEMS][LOAD][SUCCESS]';

export class LoadItems implements Action {
    readonly type = LOAD_ITEMS;
}

export class LoadItemsError implements Action {
    readonly type = LOAD_ITEMS_ERROR;

    constructor( public payload: any ) {}
}

export class LoadItemsSuccess implements Action {
    readonly type = LOAD_ITEMS_SUCCESS;

    constructor( public item: Item[] ) {}
}


export type ItemsAcctions = LoadItems |
                            LoadItemsError |
                            LoadItemsSuccess;
