import { Component, OnInit } from '@angular/core';
import { APP_NAME } from '../../config/config';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-e500',
  templateUrl: './e500.component.html',
  styleUrls: ['./e500.component.css']
})
export class E500Component implements OnInit {

  constructor(
    private titleService: Title
  ) {
    this.titleService.setTitle(APP_NAME + '500' );
  }

  ngOnInit() {
  }

}
