import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgxTinggModule } from 'projects/ngx-tingg/src/public-api';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    NgxTinggModule.forRoot(
      'client_credentials',
      '5cae9277-a266-4004-beb1-f55bc2fbde5f',
      'zxNnHR3wtK2HaSUt',
      'eWnQHPqDlWHEd61mz5lgLsteUUlYh8ku',
      false
    ),
     BrowserAnimationsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
