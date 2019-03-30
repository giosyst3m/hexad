import { APP_NAME } from './../../config/config';
import { Component, OnInit } from '@angular/core';
import { Item } from 'src/app/models/item.model';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  items: Item[] = [];
  form: FormGroup

  constructor() {
    this.form = new FormGroup({
      name: new FormControl(null, [Validators.required]),
      category: new FormControl(true),
      rating: new FormControl(true),
      id: new FormControl(),
    });
   }

  ngOnInit() {
  }

  save() {
    console.log(this.form.value);
  }

}
