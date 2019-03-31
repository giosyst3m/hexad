import { APP_NAME } from './../../config/config';
import { FormControl, Validators } from '@angular/forms';
import { PNotifyService } from './../../services/shared/p-notify.service';
import { Item } from 'src/app/models/item.model';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.reducer';
import * as itemsActions from '../../store/actions';
import { Title } from '@angular/platform-browser';
import { range, of, Subscription  } from 'rxjs';
import { concatMap, delay } from 'rxjs/operators'


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  items: Item[] = [];
  loading: boolean; 
  error: any;
  pnotify = this._pnotify.getPNotify();
  orderBy: string = '';
  rows: number = 0;
  rate = new FormControl(null, Validators.required);
  
  isRamdom: boolean = true;
  ramdomSubscription: Subscription = new Subscription();

  constructor( private  store: Store<AppState>,
    private _pnotify: PNotifyService, 
    private titleService: Title ) { 
      this.titleService.setTitle(APP_NAME + 'Dashboard' );
  }

  ngOnInit() {
    // Delect from Store items list
    this.store.select('items')
              .subscribe( resp => {
                // Assing items list to show html 
                this.items = resp.items;
                // Get totals items
                this.rows = resp.items.length;
                // Order list items by Rating ASC
                this.sort('rating', 'asc');
                // Show Loading messages
                this.loading = resp.loading;
                // if Loaded Show Message User Loaded
                if( resp.loaded ){
                  this.pnotify.success({
                    title: `Loaded`,
                    text: `Data Loaded`
                  });
                }
                // if it is a error show a user messages with deatil
                if( resp.error ){
                  this.pnotify.error({
                    title: `Error Status: ${ resp.error.status }`,
                    text: resp.error.message
                  });
                }
              })
    // Send to Store 
    this.store.dispatch( new itemsActions.LoadItems() );
  }

  /**
   * To order Array Objetcs 
   * @param field string to get which filed wants to order
   * @param order string asc = ascendant desc = descendant
   */
  sort(field:string = 'rating', order: string ="asc") {
    // create label to show frontend user can know which is order applied.
    this.orderBy = `Order by <b>${ field.toUpperCase() }</b> - <b>${ order.toUpperCase() }</b> Total <b>${ this.rows }</b>`;
    // Order by Rating
    return this.items.sort((a, b) => {
      if( field == 'rating' ) {
        if( order == 'asc') {
          return b.rating - a.rating;
        } else {
          return a.rating - b.rating;
        }
      }
      // Order by Title
      if( field == 'name' ) {
        if( order == 'asc' ) {
          return a.name.localeCompare(b.name);
        } else {
          return b.name.localeCompare(a.name);
        }
      }
      // Order by Category
      if( field == 'category') {
        if( order == 'asc' ) {
          return a.category.localeCompare(b.category);
        } else {
          return b.category.localeCompare(a.category);
        }
      }
    });
  }

  /**
   * Save new Rate from ID Item
   * @param id number Item ID
   * @param rate number new Rate
   */
  save(id:number, rate:number ){
    // Create action to update
    const action = new itemsActions.UpdateItemRateAction(id, rate);
    // Call Acction from store and update
    this.store.dispatch( action );
  }

  /**
   * randomly rate items at random times, also re-ordering the list items.
   * When button called RANDOM RATING is push show Messages "Ramdoming" and 
   * on click of this button code will start.
   * Rating random item at random time with random rating. 
   * And on same button press again it will stop random rating.
   */
  ramdom() {
    let max = 1;
    let min = 10;
    // If Ramdom is TRUE
    if( this.isRamdom ) {
      // Chage Ramdom to false
      this.isRamdom = false;
      // Show Message to user START Ramdoming
      this.pnotify.success({
        title: `Ramdoming....`,
      });
      // Subscribe 
      this.ramdomSubscription = range(0, this.items.length + 100).pipe(
        // Create a Delay you can see ramdoming each one
        concatMap(i => of(i).pipe(delay(250 + (Math.random() + 1000))))
      ).subscribe( val => {
        // Ramdom ID from list Items 
        const ramdomId = this.items[~~(this.items.length * Math.random())].id;
        // Radmon RATE 
        const ramdomRate = Math.floor( Math.random() * ( 1 + max - min ) ) + min;
        // Create action to Upadte Item
        const action = new itemsActions.RamdomItemRateAction(ramdomId, ramdomRate);
        // Execute acciton on Store
        this.store.dispatch( action );
      });
    } else {
      // isRamdom is False Show Message to user STOP Ramdoming
      this.pnotify.error({
        title: `Stop Ramdoming`,
      });
      // Destroy Susbcrition
      this.ramdomSubscription.unsubscribe();
      // change isRamdom true, User can press buttom again en star over Ramdoming.
      this.isRamdom = true;
    }
    
  }

}
