import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,FormControl, FormArray, Validators } from '@angular/forms';
import { RestService } from '../../../Services/rest.service';
import { ActivatedRoute } from '@angular/router';
import { Photo } from 'src/Models/Photo';

@Component({
  selector: 'app-photoregister',
  templateUrl: './photoregister.component.html',
  styleUrls: ['./photoregister.component.css']
})
export class PhotoregisterComponent implements OnInit {

  constructor(private route: ActivatedRoute,private rs : RestService,private formBuilder:FormBuilder) { }
  RegisterPhotoForm = new FormGroup({
      albumId : new FormControl(),     
      title: new FormControl(),
      url: new FormControl(),
      thumbnailUrl: new FormControl(),
});

AlbumId:string=this.route.snapshot.queryParamMap.get('id');
Id2:string=this.route.snapshot.queryParamMap.get('id2');
Nuevo:Photo;
PhotoSaved:Photo;


ngRegister(): void {
  this.route.paramMap.subscribe(params => {
    this.AlbumId =params.get('id');
    this.Id2 =params.get('id2');
    this.Nuevo= new Photo(Number(this.AlbumId),0,this.RegisterPhotoForm.get('title').value,this.RegisterPhotoForm.get('url').value,this.RegisterPhotoForm.get('thumbnailUrl').value );


  this.rs.postPhotos(this.Nuevo).subscribe
  (
    (response)=>
    {
      this.PhotoSaved = response;
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
      this.AlbumId =params.get('id');
      this.Id2 =params.get('id2');
    });

    this.PhotoSaved = new Photo(null,null, null,null,null);
  }

}
