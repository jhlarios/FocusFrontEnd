import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,FormControl, FormArray, Validators } from '@angular/forms';
import { RestService } from '../../../Services/rest.service';
import { ActivatedRoute } from '@angular/router';

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

AlbumId:string=this.route.snapshot.queryParamMap.get('id');;

// this.albumId = albumId;
// this.id = id;      
// this.title = title;
// this.url = url;
// this.thumbnailUrl = thumbnailUrl;

ngRegister(): void {
}

  ngOnInit(): void {
  }

}
