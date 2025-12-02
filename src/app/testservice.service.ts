import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
export interface tab1{
  id:number;
  Name:string;
  Age:number;
  Mark:number;
}
const endpoint='http://localhost:49756/api/API/';
@Injectable({
  providedIn: 'root'
})
export class TestserviceService {

  constructor(private http:HttpClient) { }
  inserttab1(student:any):Observable<any>{
    return this.http.post(endpoint+'postwebapitab',student);
  }

  getalltabs():Observable<any>{
    return this.http.get<tab1>(endpoint + 'getwebapitabs');
  }


  deletetab(id:number):Observable<any>{
    return this.http.delete<tab1>(endpoint+'deleterow/'+id);
  }


  gettab(id:number):Observable<any>{
    return this.http.get<tab1>(endpoint+'getdetails/'+id);
  }

  updatetab(id:number,student:tab1):Observable<any>{
    return this.http.put<tab1>(endpoint +'editdetails/'+id,student);
  }
}
