import { Item } from '../../models/item.model';
import * as ItemActions from '../actions';



export interface ItemState {
    item: Item;
    loaded: boolean;
    loading: boolean;
    error: any;
}

const init: ItemState = {
    item: null,
    loaded: false,
    loading: false,
    error: null
};


export function ItemReducer( state = init, action: ItemActions.ItemAcctions ): ItemState {


    switch ( action.type ) {

        case ItemActions.LOAD_ITEM:
            return {
                ...state,
                loading: true,
                error: null
            };

        case ItemActions.LOAD_ITEM_SUCCESS:
            return {
                ...state,
                loading: false,
                loaded: true,
                item: {...action.item}
            };

        case ItemActions.LOAD_ITEM_ERROR:
            return {
                ...state,
                loaded: false,
                loading: false,
                error: action.payload
            };


        default:
            return state;

    }


}

