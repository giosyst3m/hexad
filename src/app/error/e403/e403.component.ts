import { Component, OnInit } from '@angular/core';
import { APP_NAME } from '../../config/config';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-e403',
  templateUrl: './e403.component.html',
  styleUrls: ['./e403.component.css']
})
export class E403Component implements OnInit {

  constructor(
    private titleService: Title
  ) {
    this.titleService.setTitle(APP_NAME + '403' );
  }

  ngOnInit() {
  }

}
