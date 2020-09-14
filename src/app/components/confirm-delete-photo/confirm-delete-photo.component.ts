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
  id:string; 
 Resultado:ResultadoModel;
  Delete():void
  {
      this.route.paramMap.subscribe(params => {
      this.id = params.get('id');
      this.rs.deletePhotos(this.id).subscribe
   (
     (response)=>
     {
       this.Resultado = response;
       console.log(response);
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

    
  }

}
