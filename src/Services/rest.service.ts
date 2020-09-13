import { Injectable } from '@angular/core';
import { HttpClient,HttpParams } from '@angular/common/http';
import { Users } from '../Models/Users';
import { Album } from '../Models/Album';


@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(private http : HttpClient) { }

  urlUser : string  = "https://localhost:44368/FocusTest/Principal/UserGrid/";
  urlAlbums : string  = "https://localhost:44368/FocusTest/Principal/albums/";

  getUsers()
  {
    return this.http.get<Users[]>(this.urlUser);
  }

  getAlbums(id:string)
  {
    return this.http.get<Album[]>(this.urlAlbums + "?id="+ id);
  }
  

}