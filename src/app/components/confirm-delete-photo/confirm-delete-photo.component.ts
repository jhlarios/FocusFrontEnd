import { Component, OnInit } from '@angular/core';
import { RestService } from '../../../Services/rest.service';
import { FormBuilder, FormGroup,FormControl, FormArray, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ResultadoModel } from '../../../Models/ResultadoModel';
import { MatCardModule } from '@angular/material/card';



@Component({
  selector: 'app-confirm-delete-photo',
  templateUrl: './confirm-delete-photo.component.html',
  styleUrls: ['./confirm-delete-photo.component.css']
})
export class ConfirmDeletePhotoComponent implements OnInit {

  constructor(private route: ActivatedRoute,private rs : RestService,private formBuilder:FormBuilder) { }
  Id:string;
  Id3:string;
  AlbumId:string=this.route.snapshot.queryParamMap.get('id2');; 
  ResultadoModel:ResultadoModel;


  Delete():void
  {
      this.route.paramMap.subscribe(params => {
      this.Id = params.get('id');
      this.AlbumId = params.get('id2');
      this.Id3 = params.get('id3');
      console.log(this.AlbumId);
      this.rs.deletePhotos(this.Id).subscribe
      
   (
     (response)=>
     {
       this.ResultadoModel = response;
      //  console.log(response);
      //  console.log(this.ResultadoModel);
       
     },
     (error)=>
     {
       console.log("Error Occured : "+error);
      //  this.Resultado = new ResultadoModel{this.Resultado};
     }
   )
     
   }); 
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.AlbumId =params.get('id2');
      this.Id =params.get('id');
      this.Id3 = params.get('id3');
    });
    
    this.ResultadoModel=new ResultadoModel ("");
    
  }

}
