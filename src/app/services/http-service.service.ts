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


  getEmployees(limit:number,offset:number)
  {
    return this.httpClient.get(`${environment.backendUrl}`+'employee/'+`${offset}/${limit}`,)
      }


registerEmployee(employeeDetails){
  return this.httpClient.post(`${environment.backendUrl}`+'employee',employeeDetails)

}
      updateEmployee(employeeId:string,employeeDetails){
        return this.httpClient.put(`${environment.backendUrl}`+'employee/'+`${employeeId}`,employeeDetails)
      }

      deleteEmployee(employeeId:string){
        return this.httpClient.delete(`${environment.backendUrl}`+'employee/'+`${employeeId}`,)

      }
}
