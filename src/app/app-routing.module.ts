import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AlbumsTableComponent } from './components/albums-table/albums-table.component';
import { UserTableComponent } from './components/user-table/user-table.component';
import { PhotosTableComponent } from './components/photos/photos.component';
import { ConfirmDeletePhotoComponent } from './components/confirm-delete-photo/confirm-delete-photo.component';
import { PhotoregisterComponent } from './components/photoregister/photoregister.component';
import { AlbumUpdateComponent } from './components/album-update/album-update.component';
const routes: Routes = [
  {
    path: '',
    component: UserTableComponent
},
  {
    path: 'Album/:id',
    component: AlbumsTableComponent
}
,
  {
    path: 'Photos/:id/:id2',
    component: PhotosTableComponent
}

,
  {
    path: 'PhotosDelete/:id/:id2/:id3',
    component: ConfirmDeletePhotoComponent
}

,
  {
    path: 'PhotoRegister/:id/:id2',
    component: PhotoregisterComponent
}

,
  {
    path: 'AlbumUpdate/:id',
    component: AlbumUpdateComponent
}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
