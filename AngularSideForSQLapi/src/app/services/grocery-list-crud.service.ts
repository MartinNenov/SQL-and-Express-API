import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError,tap } from 'rxjs/operators';
import { Grocery } from '../models/Grocery';
import { ErrorHandlerService } from './error-handler.service';

import * as database from '../utils/LocalEnvironment';

@Injectable({
  providedIn: 'root'
})
export class GroceryListCrudService {
  private url : string;

  httpOptions:{headers:HttpHeaders} = {
    headers: new HttpHeaders({"Content-Type":"application/json"}),
  };

  constructor(
    private http:HttpClient,
    private errorHandlerService: ErrorHandlerService
    ) {
    this.url = database.default;
  };

  fetchAll(): Observable<Grocery[]> {
    return this.http
    .get<Grocery[]>(this.url,{responseType:"json"})
    .pipe(tap((_)=>console.log('fetched groceries')),
    catchError(
      this.errorHandlerService.handleError<Grocery[]>("fetchAll",[])
    )
    );
  }

  post(item : Partial<Grocery>): Observable<any> {
    return this.http.post<Partial<Grocery>>(this.url, item,this.httpOptions).pipe(
      catchError(
        this.errorHandlerService.handleError<any>("post")
      )
    )
  }

  update(grocery : Grocery): Observable<any> {
    return this.http.patch<Grocery>(this.url, grocery,this.httpOptions).pipe(
      catchError(
        this.errorHandlerService.handleError<any>("update")
      )
    )
  }

  delete(id:number):Observable<any>{
    const url = `${this.url}/${id}`;
    return this.http.delete<Grocery>(url,this.httpOptions).pipe(
      catchError(
        this.errorHandlerService.handleError<any>("delete")
      )
    )
  }
}
