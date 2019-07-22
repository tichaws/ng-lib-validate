import { ValidateModule } from 'validate';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ValidateModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
