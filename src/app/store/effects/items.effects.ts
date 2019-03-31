import { Injectable } from "@angular/core";
import { Actions, Effect } from '@ngrx/effects';
import * as itemsActions from '../actions';
import { map, switchMap, catchError } from "rxjs/operators";
import { ItemService } from "src/app/services/item.service";
import { of } from "rxjs";

@Injectable()
/**
 * Class get all effects
 */
export class ItemsEffects {
    
    
    constructor(
        // Get all Items Actions
        private actios$: Actions,
        // Get Service Item
        private itemsService: ItemService
    ) {}
    /**
     * Create a effect to get Items List from Item Sercie
     * valid if OK or Error execute a restevie Action
     */
    @Effect()
    // Assing actions subscrition
    loadItems$ = this.actios$.ofType( itemsActions.LOAD_ITEMS)
                    .pipe(
                        // Cancel and create a new observable
                        switchMap( () => {
                            // Execute Item Service to Get Items
                            return this.itemsService.getItems()
                                        .pipe(
                                            // If it is OK, execute action Success
                                            map( items => new itemsActions.LoadItemsSuccess(items)),
                                            // If there is a Error, execute a Action Error  
                                            catchError( error => of( new itemsActions.LoadItemsError(error) ))
                                        );
                        })
                    )


}