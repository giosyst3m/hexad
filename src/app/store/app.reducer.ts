import { ActionReducerMap } from '@ngrx/store';
import * as reducers from './reducers';

/**
 * Create a interface for App State
 */
export interface AppState {
    // items state
    items: reducers.ItemsState;
}

/**
 * Assing App Reducers
 */
export const appReducers: ActionReducerMap<AppState> = {
    // items reducer items
    items: reducers.itemsReducer,
};