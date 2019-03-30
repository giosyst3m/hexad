import { Item } from "src/app/models/item.model";
import * as fromItems from '../actions'


export interface ItemsState {
    items: Item[];
    loaded: boolean;
    loading: boolean;
    error: any;
}

const stateInit: ItemsState = {
    items: [],
    loaded: false,
    loading: false,
    error: null
}

export function itemsReducer( state = stateInit, action: fromItems.itemsActions ): ItemsState {

    switch (action.type) {
        case fromItems.LOAD_ITEMS:
            return {
                ...state,
                loading: true,
                error: null,
            };
        case fromItems.LOAD_ITEMS_SUCCESS:
            return {
                ...state,
                loading: false,
                loaded: true,
                error: null,
                items: [...action.items]
            };
        case fromItems.LOAD_ITEMS_ERROR:
            return {
                ...state,
                loaded: false,
                loading: false,
                error: {
                    status: action.payload.status,
                    message: action.payload.message,
                    url: action.payload.url
                }
            };
        default:
            return state;
    }
}