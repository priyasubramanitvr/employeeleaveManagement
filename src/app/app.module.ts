import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LoginModule } from './login/login.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LeaveModule } from './leave/leave.module';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonMaterialModule } from './shared/common-material/common-material.module';
import { AdminModule } from './Admin/admin.module';




@NgModule({
  declarations: [
    AppComponent,
 
   
 
    
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    LoginModule,
    LeaveModule,
    FormsModule,
    ReactiveFormsModule,
    AdminModule,
    CommonModule,
    CommonMaterialModule,
    
   
    
    
   
    CommonModule,
    RouterModule,
    BrowserAnimationsModule,
 
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
