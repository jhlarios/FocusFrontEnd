import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AlbumsTableComponent } from './components/albums-table/albums-table.component';
import { TablausuariosComponent } from './components/tablausuarios/tablausuarios.component';

const routes: Routes = [
  {
    path: '',
    component: TablausuariosComponent
},
  {
    path: 'Album/:id',
    component: AlbumsTableComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
