import { PNotifyService } from './../../services/shared/p-notify.service';
import { Item } from 'src/app/models/item.model';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.reducer';
import * as itemsActions from '../../store/actions';

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

  constructor( private  store: Store<AppState>,
    private _pnotify: PNotifyService, ) { 
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
}
