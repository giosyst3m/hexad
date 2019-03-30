import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ItemService {

  private url = '/assets/data/';

  constructor( private http: HttpClient ) { }


  getItems() {
    return this.http.get(`${ this.url }/items.json`)
          .pipe(
            map( resp => resp)
          );
  }

  getItemById( id: string ) {
    return this.http.get(`${ this.url }/users/${ id }`)
          .pipe(
            map( resp => resp['data'])
          );
  }

}
