import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AjoutacheComponent } from './ajoutache/ajoutache.component';
import { ModiftacheComponent } from './modiftache/modiftache.component';
import { SuprimtacheComponent } from './suprimtache/suprimtache.component';

@NgModule({
  declarations: [
    AppComponent,
    AjoutacheComponent,
    ModiftacheComponent,
    SuprimtacheComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
