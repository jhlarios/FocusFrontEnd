import { Component, OnInit } from '@angular/core';
import { RestService } from '../../../Services/rest.service';
import { Album } from '../../../Models/Album';
import { HttpParams } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-albums-table',
  templateUrl: './albums-table.component.html',
  styleUrls: ['./albums-table.component.css']
})
export class AlbumsTableComponent implements OnInit {

  constructor( private route: ActivatedRoute, private rs : RestService){}
  columns = [ "Title"];
  index = ["title"];
  albums : Album[] = [];
  parameters:HttpParams;
  id:string; 

  ngOnInit(): void {
   this.route.paramMap.subscribe(params => {
       this.id = params.get('id');
     
       this.rs.getAlbums(this.id).subscribe
    (
      (response)=>
      {
        this.albums = response;
        
      },
      (error)=>
      {
        console.log("Error Occured : "+error);
      }
    )
      
    });
    
   
  }

}
