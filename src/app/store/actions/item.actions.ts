import { Action } from '@ngrx/store';

export const ADD_ITEM = '[Item](Add)';

export class AddItemAction implements Action {
    readonly type = ADD_ITEM;

    constructor(public name: string, public category: string, public rating: number) {
        
    }
}

export type ItemActions = AddItemAction;