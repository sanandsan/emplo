import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './models/login/login.component';
import {ReactiveFormsModule,FormsModule} from '@angular/forms'
import {MatFormFieldModule} from '@angular/material/form-field'
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
// import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http'
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router'
/**
 * NgModule that includes all Material modules.
*/

import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { DashboardComponent } from './models/dashboard/dashboard.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,MatButtonModule,BrowserAnimationsModule,HttpClientModule,
    AppRoutingModule,ReactiveFormsModule,MatIconModule,CommonModule,RouterModule,
    MatInputModule,MatFormFieldModule,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
