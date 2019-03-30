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
  currentRate = 0;
  constructor() {
    this.form = new FormGroup({
      name: new FormControl('', [Validators.required]),
      category: new FormControl('', [Validators.required]),
      rating: new FormControl(0, [Validators.required]),
    });
   }

  ngOnInit() {
  }

  save() {
    console.log(this.form.value);
  }

}
