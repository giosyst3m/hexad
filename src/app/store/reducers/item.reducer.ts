import { Item } from '../../models/item.model';
import * as fromItem from '../actions/item.actions';

const init: Item[] = [];

export function itemReducer( state = init, action: fromItem.ItemActions ): Item[]{

    switch ( action.type ){
        case fromItem.ADD_ITEM:
            const item = new Item( action.name, action.category, action.rating);
            return [...state, item];
        default:
            return state;
    }
}