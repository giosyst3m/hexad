
import { ActionReducerMap } from '@ngrx/store';
import * as reducers from './reducers';



export interface AppState {
    items: reducers.ItemsState;
    item: reducers.ItemState;
}

export const appReducers: ActionReducerMap<AppState> = {
    items: reducers.ItemsReducer,
    item: reducers.ItemReducer
};
