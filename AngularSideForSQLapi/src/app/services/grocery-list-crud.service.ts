import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Grocery } from '../models/Grocery'

import * as config from '../utils/LocalEnvironment.json';

@Injectable({
  providedIn: 'root'
})
export class GroceryListCrudService {
  private url : string;

  constructor(private http:HttpClient) {
    this.url = config.database;
  }

  fetchAll(): Observable<Grocery[]> {
    return this.http
    .get<Grocery[]>(this.url,{responseType:"json"})
    .pipe(tap((_)=>console.log('fetched groceries')));
  }
}
