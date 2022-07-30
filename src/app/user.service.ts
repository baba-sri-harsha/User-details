import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserDetails } from './components/models/userDetails';
import { Users } from './components/models/users';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private _httpClient:HttpClient) {}

  getAllUsers=():Observable<Users[]>=>{
     let  url='https://jsonplaceholder.typicode.com/users'
      return this._httpClient.get<Users[]>(url)
  }

  getUserDetails=(id:number):Observable<UserDetails[]>=>{
    let url= `https://jsonplaceholder.typicode.com/albums?userId'=${id}`
    return this._httpClient.get<UserDetails[]>(url)
  }
}
