import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  baseUrl:string = 'https://jsonplaceholder.cypress.io/';

  constructor(private http:HttpClient) { }

  listUsers(): Observable<Object[]>{
   return this.http.get<Object[]>(this.baseUrl+ 'users');
  }

  viewUser(id:string){
    return this.http.get(this.baseUrl + 'users/' + id);
  }

}
