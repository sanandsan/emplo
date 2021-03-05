import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {environment} from './../../environments/environment'
@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {

  constructor(private httpClient:HttpClient) { }


  login(loginDetails:{email:string,password:string}){
return this.httpClient.post(`${environment.backendUrl}`+'login',loginDetails)
  }
}
