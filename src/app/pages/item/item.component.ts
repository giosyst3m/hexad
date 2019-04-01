import { Component, OnInit, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Item } from 'src/app/models/item.model';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.reducer';
import * as fromItem from '../../store/actions/items.actions';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css'],
  
})
export class ItemComponent implements OnInit {
  items: Item[] = [];
  form: FormGroup
  currentRate = 0;
  constructor(
      private store: Store<AppState>
  ) {
    // Create FormGroup to get Data to create a new item
    this.form = new FormGroup({
      name: new FormControl('', [Validators.required]),
      category: new FormControl('', [Validators.required]),
      rating: new FormControl(0, [Validators.required]),
    });
   }

  ngOnInit() {
  }

  /**
   * Save a item on the list in store.
   */
  save() {
    // Valid form
    if( this.form.invalid ){
      return;
    }
    // Create a accition to add new item
    const action = new fromItem.AddItemAction(
                        this.form.controls['name'].value, 
                        this.form.controls['category'].value,
                        this.form.controls['rating'].value
                        )
    // Execute store with new action
    this.store.dispatch(action);
    // Clean form
    this.form.reset();
  }

}
