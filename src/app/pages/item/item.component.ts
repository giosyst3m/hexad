import { APP_NAME } from './../../config/config';
import { Component, OnInit } from '@angular/core';
import { Item } from 'src/app/models/item.model';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.reducer';
import * as fromItem from '../../store/actions/items.actions';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  items: Item[] = [];
  form: FormGroup
  currentRate = 0;
  constructor(
      private store: Store<AppState>
  ) {
    this.form = new FormGroup({
      name: new FormControl('', [Validators.required]),
      category: new FormControl('', [Validators.required]),
      rating: new FormControl(0, [Validators.required]),
    });
   }

  ngOnInit() {
  }

  save() {
    
    if( this.form.invalid ){
      return;
    }

    const action = new fromItem.AddItemAction(
                        this.form.controls['name'].value, 
                        this.form.controls['category'].value,
                        this.form.controls['rating'].value
                        )
  this.store.dispatch(action);
   this.form.reset();
  }

}
