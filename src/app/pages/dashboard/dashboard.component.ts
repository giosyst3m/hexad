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

  constructor( private  store: Store<AppState>,
    private _pnotify: PNotifyService, ) { 
  }

  ngOnInit() {
    this.store.select('items')
              .subscribe( resp => {
                this.items = resp.items;
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

}
