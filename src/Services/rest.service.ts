import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Users } from '../Models/Users';

@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(private http : HttpClient) { }

  url : string  = "https://localhost:44368/FocusTest/Principal/UserGrid/";

  getUsers()
  {
    return this.http.get<Users[]>(this.url);
  }
  

}