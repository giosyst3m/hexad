import { Injectable } from "@angular/core";
import { Actions, Effect } from '@ngrx/effects';
import * as itemsActions from '../actions';
import { map } from "rxjs/operators";

@Injectable()
export class ItemsEffects {
    
    
    constructor(
        private actios$: Actions
    ) {}

    @Effect({dispatch: false })
    loadItems$ = this.actios$.ofType( itemsActions.LOAD_ITEMS)
                    .pipe(
                        map( action => {
                            console.log(action);
                            return action;
                        })
                    )


}