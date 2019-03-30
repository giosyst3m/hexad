import { Action } from '@ngrx/store';
import { Item } from '../../models/item.model';

export const LOAD_ITEM = '[ITEM][LOAD]';
export const LOAD_ITEM_ERROR = '[ITEM][LOAD][ERROR]';
export const LOAD_ITEM_SUCCESS = '[ITEM][LOAD][SUCCESS]';

export class LoadItem implements Action {
    readonly type = LOAD_ITEM;
}

export class LoadItemError implements Action {
    readonly type = LOAD_ITEM_ERROR;

    constructor( public payload: any ) {}
}

export class LoadItemSuccess implements Action {
    readonly type = LOAD_ITEM_SUCCESS;

    constructor( public item: Item[] ) {}
}


export type ItemAcctions = LoadItem |
                            LoadItemError |
                            LoadItemSuccess;
