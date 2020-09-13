import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { TablausuariosComponent } from './components/tablausuarios/tablausuarios.component';

@NgModule({
  declarations: [
    AppComponent,
    TablausuariosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserModule,
     HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
