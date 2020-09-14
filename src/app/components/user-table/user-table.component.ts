import { Component, OnInit } from '@angular/core';
import { RestService } from '../../../Services/rest.service';
import { Users } from '../../../Models/Users';

@Component({
  selector: 'user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.css']
})
export class UserTableComponent implements OnInit {

  constructor(private rs : RestService){}
  columns = ["Id", "Name", "User name", "Email", "Address"];
  index = ["id", "name", "username", "email", "address"];
  users : Users[] = [];
  
  ngOnInit(): void {
    this.rs.getUsers().subscribe
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
