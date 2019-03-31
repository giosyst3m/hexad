import { Item } from "src/app/models/item.model";
import * as fromItems from '../actions'

/**
 * Create a Interface with a structure to work 
 */
export interface ItemsState {
    items: Item[];
    loaded: boolean;
    loading: boolean;
    error: any;
}

/**
 * Assing Init State
 */
const stateInit: ItemsState = {
    items: [],
    loaded: false,
    loading: false,
    error: null
}

/**
 * function item Reducer which have all acctios to execute
 * @param state ItemSate get init estructure from interface
 * @param action Action 
 * @returns ItemsStae
 */
export function itemsReducer( state = stateInit, action: fromItems.itemsActions ): ItemsState {

    switch (action.type) {
        // Load Itmes
        case fromItems.LOAD_ITEMS:
            // return a new items array
            return {
                ...state,
                loading: true,
                error: null,
            };
        // If Load Items Success
        case fromItems.LOAD_ITEMS_SUCCESS:
            // Return a new items array
            return {
                ...state,
                loading: false,
                loaded: true,
                error: null,
                items: [...action.items]
            };
        // if load items has a error
        case fromItems.LOAD_ITEMS_ERROR:
            // Return items array empty with erros descriptions
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
        // Add a new item to store
        case fromItems.ADD_ITEM:
            // Create a new Item
            const item = new Item( action.name, action.category, action.rating);
            // return a new items array with a new  item
            return {
                ...state,
                items: [...state.items,item]
            }
        // Update rate item form id item
        case fromItems.UPDATE_ITEM_RATE:
            // return nue items array with a new item 
            return  {
                ...state,
                items: [...state.items.map( itemEdit => {
                    if( itemEdit.id === action.id ) {
                        return {
                            ...itemEdit,
                            rating: action.rate
                        };
                    } else {
                        return itemEdit;
                    }
                })]
            }
        // Update Rate item from id item
        case fromItems.RAMDOM_ITEM_RATE:
        // return a new items array with a new tiem
        return  {
            ...state,
            loaded: false,
            items: [...state.items.map( itemEdit => {
                if( itemEdit.id === action.id ) {
                    return {
                        ...itemEdit,
                        rating: action.ramdom
                    };
                } else {
                    return itemEdit;
                }
            })]
        }
        // default state
        default:
            return state;
    }
}