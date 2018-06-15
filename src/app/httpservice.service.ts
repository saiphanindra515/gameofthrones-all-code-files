import { Injectable } from '@angular/core';

import {HttpClient,HttpErrorResponse} from '@angular/common/http';
import {Response} from '@angular/http';
import {Observable} from 'rxjs';
import{catchError} from 'rxjs/operators';
import {tap} from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class HttpserviceService {
  public response;
public BaseUrl = 'https://www.anapioficeandfire.com/api/'
  constructor(public _http:HttpClient) { }
 public getInfo(word):any{
   this.response=this._http.get(this.BaseUrl+word);
   console.log(this.response);
   return this.response;
 }
 public getbook(id):any{
 this.response=this._http.get(this.BaseUrl+'books/'+id);
 return this.response;
 }
 public getchar(char):any{
   return this._http.get(char);
}
public getcharacter(id):any{
  return this._http.get(this.BaseUrl+'characters/'+id)
}
public gethouse(id):any{
  return this._http.get(this.BaseUrl+'houses/'+id)
}

}
