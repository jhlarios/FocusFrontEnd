import { Component, OnInit, Input } from '@angular/core';
import { RestService } from '../../../Services/rest.service';
import { Users } from '../../../Models/Users';
import { FormBuilder, FormGroup,FormControl, FormArray, Validators } from '@angular/forms';


@Component({
  selector: 'user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.css']
})
export class UserTableComponent implements OnInit {
  
  constructor(private rs : RestService,private formBuilder:FormBuilder){}
  columns = ["Id", "Name", "User name", "Email", "Address"];
  index = ["id", "name", "username", "email", "address"];
  FilterForm1 = new FormGroup({
    name: new FormControl(),
    username: new FormControl(),
    email: new FormControl()
});

FilterForm2 = new FormGroup({
  city: new FormControl()
});
  users : Users[] = [];
  
 
  
  ngOnInit(): void {
  
    this.rs.getUsers(this.FilterForm1.get('name').value , this.FilterForm1.get('username').value, this.FilterForm1.get('email').value , this.FilterForm2.get('city').value).subscribe
    (
      (response)=>
      {
        this.users = response;
      },
      (error)=>
      {
        console.log("Error Occured : "+error);
      }
    )
  }

}
