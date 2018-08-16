import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './pages/';
import {ApproutingModule} from './approuter.module';
import {ApiService} from '../services/api';
import {HttpClientModule} from '@angular/common/http';
import { LoginComponent } from './pages/';
import { RegistComponent } from './pages/';
import {AuthService} from '../services/authservice/';
import {FormsModule} from '@angular/forms';
import {UserService} from '../services/userservice';
import { AdmincoverComponent } from './pages/';
import {AdminsideComponent} from './pages';
import { Page1Component } from './pages/';
import { Page2Component } from './pages/';
import { Page3Component } from './pages/';


@NgModule({
  declarations: [
    AppComponent,
    RegistComponent,
    LoginComponent,
    HomeComponent,
    AdmincoverComponent,
    AdminsideComponent,
    Page1Component,
    Page2Component,
    Page3Component,
  ],
  imports: [
    ApproutingModule,
    BrowserModule,
    FormsModule,
  ],
  providers: [
    HttpClientModule,
    ApiService,
    UserService,
    AuthService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
