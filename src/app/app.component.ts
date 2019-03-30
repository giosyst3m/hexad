import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { APP_NAME } from './config/config';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = APP_NAME;
  public constructor(private titleService: Title ) {
    this.titleService.setTitle( APP_NAME );
   }

}
