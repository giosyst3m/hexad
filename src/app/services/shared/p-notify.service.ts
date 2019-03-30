import { Injectable } from '@angular/core';
import PNotify from 'pnotify/dist/es/PNotify';
import PNotifyButtons from 'pnotify/dist/es/PNotifyButtons';
import PNotifyConfirm from 'pnotify/dist/es/PNotifyConfirm';

@Injectable()
export class PNotifyService {

  constructor() {}

  getPNotify() {
    PNotifyButtons; // Initiate the module. Important!
    PNotifyConfirm;
    PNotify.defaults.styling = 'bootstrap3';
    PNotify.defaults.icons = 'fontawesome4';
    // this._PNotify.defaults.icons = 'fontawesome';
    return PNotify;
  }
}
