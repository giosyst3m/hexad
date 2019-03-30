import { Injectable } from '@angular/core';
declare let _satellite: any;

@Injectable({
  providedIn: 'root'
})
export class AnalitycsService {

  constructor() { }

  sendPageViewDTM( pages ) {
    window['digitalData'] = {
      pages
  };
  console.log(window['digitalData']);
    _satellite.track('page view');
  }
}
