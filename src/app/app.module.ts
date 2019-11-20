import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestLibPrjModule } from 'test-lib-prj';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TestLibPrjModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
