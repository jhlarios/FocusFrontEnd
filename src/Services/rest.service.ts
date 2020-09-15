import { Injectable } from '@angular/core';
import { HttpClient,HttpParams } from '@angular/common/http';
import { Users } from '../Models/Users';
import { Album } from '../Models/Album';
import { Photo } from '../Models/Photo';
import { ResultadoModel } from '../Models/ResultadoModel';

@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(private http : HttpClient) { }

  urlUser   : string  = "https://localhost:44368/FocusTest/Principal/UserGrid";
  urlAlbums : string  = "https://localhost:44368/FocusTest/Principal/albums";
  urlPhotos : string  = "https://localhost:44368/FocusTest/Principal/photos/";
  urlAlbumDetail : string  = "https://localhost:44368/FocusTest/Principal/AlbumDetail";
  

  getUsers(name:string , username:string , email:string , city:string )
  {
    return this.http.get<Users[]>(this.urlUser+"?name="+ name+"&username="+username+"&email="+email+"&city="+city);
  }

  getAlbums(id:string)
  {
    return this.http.get<Album[]>(this.urlAlbums + "?id="+ id);
  }

  getPhotos(id:string)
  {
    return this.http.get<Photo[]>(this.urlPhotos + "?id="+ id);
  }

  getAlbumDetail(id:string)
  {
    return this.http.get<Album>(this.urlAlbumDetail + "?id="+ id);
  }

  putAlbum(album:Album)
  {
    return this.http.put<Album>(this.urlAlbums, album);
  }

  deletePhotos(id:string)
  {
    return this.http.delete<ResultadoModel>(this.urlPhotos+ "?id="+ id);
  }

  postPhotos(photo:Photo)
  {
    return this.http.post<Photo>(this.urlPhotos, photo);
  }
  

}