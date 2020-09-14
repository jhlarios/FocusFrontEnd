import { Component, OnInit } from '@angular/core';
import { RestService } from '../../../Services/rest.service';
import { Photo } from '../../../Models/Photo';
import { HttpParams } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'PhotoTable',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosTableComponent implements OnInit {

  constructor( private route: ActivatedRoute, private rs : RestService){}
  columns = [ "Title"];
  index = ["title"];
  photos : Photo[] = [];
  id:string; 

  ngOnInit(): void {
   this.route.paramMap.subscribe(params => {
       this.id = params.get('id');
     console.log (this.id);
       this.rs.getPhotos(this.id).subscribe
    (
      (response)=>
      {
        this.photos = response;
        
      },
      (error)=>
      {
        console.log("Error Occured : "+error);
      }
    )
      
    });
    
   
  }

}