import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PatriciaComponent } from './patricia/patricia.component';
import { TestInputComponent } from './patricia/test-input/test-input.component';
import { AntonyComponent } from './antony/antony.component';
import {PatriciaService} from "./patricia/patricia.service";

@NgModule({
  declarations: [
    AppComponent,
    PatriciaComponent,
    TestInputComponent,
    AntonyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [PatriciaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
