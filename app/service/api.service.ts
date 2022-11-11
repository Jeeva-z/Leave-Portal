import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http : HttpClient) { }
  
  postLeave(data : any){
    return this.http.post<any>("http://localhost:3000/Leave-Details/",data);
  }
  getLeave(){
    return this.http.get<any> ("http://localhost:3000/Leave-Details/");
  }
}