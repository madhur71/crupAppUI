import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmployeeServiceService {

   private _url: string = 'http://localhost:8080/api/'

  constructor( private http:HttpClient ) { }

  getAllEmployee(){
    return this.http.get<any>(this._url + "employees");
  }

  getEmployeeById(id:any){
    return this.http.get<any>(this._url+  "employees/" + id )
  }

  addEmployee(payload:any){
    return this.http.post<any>(this._url + "employee" , payload)
  }
  updateEmployee(payload:any){
    return this.http.put<any>(this._url + "employee" , payload)
  }
  deleteEmployee(id:any){
    return this.http.delete<any>(this._url + "employees/" + id)
  }
}
