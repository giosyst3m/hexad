import { Component, OnInit } from '@angular/core';
import { APP_NAME } from '../../config/config';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-e404',
  templateUrl: './e404.component.html',
  styleUrls: ['./e404.component.css']
})
export class E404Component implements OnInit {

  constructor(
    private titleService: Title
  ) {
    this.titleService.setTitle(APP_NAME + '404' );
  }

  ngOnInit() {
  }

}
