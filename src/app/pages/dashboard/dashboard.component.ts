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
    this.store.select('items')
              .subscribe( resp => {
                this.items = resp.items;
                this.rows = resp.items.length;
                this.sort('rating', 'asc');
                this.loading = resp.loading;
                if( resp.loaded ){
                  this.pnotify.success({
                    title: `Loaded`,
                    text: `Data Loaded`
                  });
                }
                if( resp.error ){
                  this.pnotify.error({
                    title: `Error Status: ${ resp.error.status }`,
                    text: resp.error.message
                  });
                }
              })
    this.store.dispatch( new itemsActions.LoadItems() );
  }

  sort(field:string = 'rating', order: string ="asc") {
    this.orderBy = `Order by <b>${ field.toUpperCase() }</b> - <b>${ order.toUpperCase() }</b> Total <b>${ this.rows }</b>`;
    return this.items.sort((a, b) => {
      if( field == 'rating' ) {
        if( order == 'asc') {
          return b.rating - a.rating;
        } else {
          return a.rating - b.rating;
        }
      }
      if( field == 'name' ) {
        if( order == 'asc' ) {
          return a.name.localeCompare(b.name);
        } else {
          return b.name.localeCompare(a.name);
        }
      }
      if( field == 'category') {
        if( order == 'asc' ) {
          return a.category.localeCompare(b.category);
        } else {
          return b.category.localeCompare(a.category);
        }
      }
    });
  }

  save(id:number, rate:number ){
    const action = new itemsActions.UpdateItemRateAction(id, rate);
    this.store.dispatch( action );
  }

  ramdom() {
    let max = 1;
    let min = 10;
    if( this.isRamdom ) {
      this.isRamdom = false;
      this.pnotify.success({
        title: `Ramdoming....`,
      });
      this.ramdomSubscription = range(0, this.items.length + 100).pipe(
        concatMap(i => of(i).pipe(delay(250 + (Math.random() + 1000))))
      ).subscribe( val => {
        const ramdomId = this.items[~~(this.items.length * Math.random())].id;
        const ramdomRate = Math.floor( Math.random() * ( 1 + max - min ) ) + min;
        const action = new itemsActions.RamdomItemRateAction(ramdomId, ramdomRate);
        this.store.dispatch( action );
      });
    } else {
      this.pnotify.error({
        title: `Stop Ramdoming`,
      });
      this.ramdomSubscription.unsubscribe();
      this.isRamdom = true;
    }
    
  }

}
