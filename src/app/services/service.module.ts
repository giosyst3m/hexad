import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  PNotifyService,
 } from './service.index';





@NgModule({
  imports: [
    CommonModule
  ],
  providers: [
    PNotifyService,
  ],
  declarations: []
})
export class ServiceModule { }
