import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ItemService {

  private url = environment.baseURL;

  constructor( private http: HttpClient ) { }


  getItems() {
    return this.http.get(`${ this.url }/assets/data/items.json`)
          .pipe(
            map( resp => resp)
          );
  }


}
