/*
    @Project: Zomato API Demo
    @Author: Ashish Vishwakarma
*/

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/common/header/header.component';
import { FooterComponent } from './components/common/footer/footer.component';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

import { MyMaterialModule } from './resources/material.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RestaurantDetailsComponent } from './components/restaurant-details/restaurant-details.component';
import { HttpClientModule } from '@angular/common/http';
import { RestaurantDescComponent } from './components/restaurant-desc/restaurant-desc.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    DashboardComponent,
    RestaurantDetailsComponent,
    RestaurantDescComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MyMaterialModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
