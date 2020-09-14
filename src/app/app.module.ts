import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { UserTableComponent } from './components/user-table/user-table.component';
import { AlbumsTableComponent } from './components/albums-table/albums-table.component';
import { PhotosTableComponent } from './components/photos/photos.component';
import { FormsModule } from '@angular/forms' 
import { ReactiveFormsModule} from '@angular/forms';
import { ConfirmDeletePhotoComponent } from './components/confirm-delete-photo/confirm-delete-photo.component'

@NgModule({
  declarations: [
    AppComponent,
    UserTableComponent,
    AlbumsTableComponent,
    PhotosTableComponent,
    ConfirmDeletePhotoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserModule,
     HttpClientModule,
     ReactiveFormsModule,  
   FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
