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
  constructor( private  store: Store<AppState> ) { 
  }

  ngOnInit() {
    this.store.dispatch( new itemsActions.LoadItems() );
  }

}
