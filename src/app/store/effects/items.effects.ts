import { Injectable } from "@angular/core";
import { Actions, Effect } from '@ngrx/effects';
import * as itemsActions from '../actions';
import { map, switchMap, catchError } from "rxjs/operators";
import { ItemService } from "src/app/services/item.service";
import { of } from "rxjs";

@Injectable()
export class ItemsEffects {
    
    
    constructor(
        private actios$: Actions,
        private itemsService: ItemService
    ) {}

    @Effect()
    loadItems$ = this.actios$.ofType( itemsActions.LOAD_ITEMS)
                    .pipe(
                        switchMap( () => {
                            return this.itemsService.getItems()
                                        .pipe(
                                            map( items => new itemsActions.LoadItemsSuccess(items)),
                                            catchError( error => of( new itemsActions.LoadItemsError(error) ))
                                        );
                        })
                    )


}