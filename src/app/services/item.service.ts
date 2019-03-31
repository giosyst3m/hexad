import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
/**
 * Service Items 
 */
export class ItemService {

  // assign URL Base
  private url = environment.baseURL;

  /**
   * contructor 
   * @param http inyect HTTPClient
   */
  constructor( private http: HttpClient ) { }


  /**
   * Get all Items from json file
   */
  getItems() {
    // Get Json File
    return this.http.get(`${ this.url }/assets/data/items.json`)
          .pipe(
            map( resp => resp)
          );
  }


}
