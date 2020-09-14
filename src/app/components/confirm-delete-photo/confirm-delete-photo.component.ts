import { Component, OnInit } from '@angular/core';
import { RestService } from '../../../Services/rest.service';
import { FormBuilder, FormGroup,FormControl, FormArray, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Photo } from '../../../Models/Photo';

@Component({
  selector: 'app-confirm-delete-photo',
  templateUrl: './confirm-delete-photo.component.html',
  styleUrls: ['./confirm-delete-photo.component.css']
})
export class ConfirmDeletePhotoComponent implements OnInit {

  constructor(private route: ActivatedRoute,private rs : RestService,private formBuilder:FormBuilder) { }
  id:string; 
  columns = [ "Title"];
  index = ["title"];
  photos : Photo[] = [];
  Delete():void
  {
      this.route.paramMap.subscribe(params => {
      this.id = params.get('id');
      this.rs.deletePhotos(this.id).subscribe
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

  ngOnInit(): void {

    
  }

}
