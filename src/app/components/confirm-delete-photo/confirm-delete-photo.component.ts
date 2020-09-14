import { Component, OnInit } from '@angular/core';
import { RestService } from '../../../Services/rest.service';
import { FormBuilder, FormGroup,FormControl, FormArray, Validators } from '@angular/forms';

@Component({
  selector: 'app-confirm-delete-photo',
  templateUrl: './confirm-delete-photo.component.html',
  styleUrls: ['./confirm-delete-photo.component.css']
})
export class ConfirmDeletePhotoComponent implements OnInit {

  constructor(private rs : RestService,private formBuilder:FormBuilder) { }
 
  Delete():void
  {
    
  }

  ngOnInit(): void {
  }

}
