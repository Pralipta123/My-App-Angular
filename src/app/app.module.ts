// Import necessary Angular modules and components
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
// Import the RouterModule for setting up the application routes
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LayoutModule } from './layout/layout.module';
import { UsersModule } from './users/users.module';
import { MatIconRegistry } from '@angular/material/icon';
import { UserService } from './services/user.service';
import { MatListModule } from '@angular/material/list';
// Define the routes for your application


// Decorate the module with @NgModule
@NgModule({
  declarations: [
   
  ],
  imports: [
    // Include Angular modules and third-party modules here
    BrowserModule,
    Component,
    FormsModule,
    HttpClientModule,
    UsersModule,
  AppComponent,
  LayoutModule,
  MatListModule,
    RouterModule
  ],
  providers: [
   MatIconRegistry,UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
