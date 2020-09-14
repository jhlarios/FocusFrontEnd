import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AlbumsTableComponent } from './components/albums-table/albums-table.component';
import { UserTableComponent } from './components/user-table/user-table.component';
import { PhotosTableComponent } from './components/photos/photos.component';
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
    path: 'Photos/:id',
    component: PhotosTableComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
