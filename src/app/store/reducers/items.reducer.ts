import { Item } from '../../models/item.model';
import * as ItemsActions from '../actions/items.actions';




export interface ItemsState {
    items: Item[];
    loaded: boolean;
    loading: boolean;
    error: any;
}

const init: ItemsState = {
    items: [],
    loaded: false,
    loading: false,
    error: null
};


export function ItemsReducer( state = init, action: ItemsActions.ItemsAcctions ): ItemsState {


    switch ( action.type ) {

        case ItemsActions.LOAD_ITEMS:
            return {
                ...state,
                loading: true,
                error: null
            };

        case ItemsActions.LOAD_ITEMS_SUCCESS:
            return {
                ...state,
                loading: false,
                loaded: true,
                item: [...action.item]
            };

        case ItemsActions.LOAD_ITEMS_ERROR:
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

