import { Item } from 'src/app/models/item.model';
import { Component, OnInit } from '@angular/core';
import { ItemService } from 'src/app/services/item.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  items: Item[] = [];
  constructor( private itemService: ItemService) { 
    this.itemService.getItems()
      .subscribe( (resp:any) => {
        this.items = resp;
        console.log(resp);
      })
  }

  ngOnInit() {
  }

}
