import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,FormControl, FormArray, Validators } from '@angular/forms';
import { RestService } from '../../../Services/rest.service';
import { ActivatedRoute } from '@angular/router';
import { Album } from 'src/Models/Album';

@Component({
  selector: 'app-album-update',
  templateUrl: './album-update.component.html',
  styleUrls: ['./album-update.component.css']
})
export class AlbumUpdateComponent implements OnInit {

  constructor(private route: ActivatedRoute,private rs : RestService,private formBuilder:FormBuilder) { }
  id:string;
  AlbumCurrent:Album= new Album(null,null, null);
  AlbumUpdated:Album =new Album(null,null, null);
  UpdateAlbumForm = new FormGroup({
         
    title: new FormControl(),
    
});

ngUpdate():void{
 
    this.route.paramMap.subscribe(params => {
      this.id = params.get('id');
      this.rs.putAlbum(this.AlbumCurrent).subscribe
   (
     (response)=>
     {
       this.AlbumUpdated = response;
       console.log(this.AlbumUpdated);
     },
     (error)=>
     {
       console.log("Error Occured : "+error);
     }
   )
     
   });
}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.id = params.get('id');
      this.rs.getAlbumDetail(this.id).subscribe
   (
     (response)=>
     {
       this.AlbumCurrent = response;
      //  console.log(this.AlbumCurrent);
     },
     (error)=>
     {
       console.log("Error Occured : "+error);
     }
   )
     
   });

   this.AlbumUpdated = new Album(null,null, null);
  }

}
