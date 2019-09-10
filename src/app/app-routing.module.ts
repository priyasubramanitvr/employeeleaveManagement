import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './core/home/home.component';
import {  SideBarComponent } from './core/sidebar/sidebar.component';



const routes: Routes = [
  { path: '', component: HomeComponent},
  {path:'sidebar',component:SideBarComponent},

  
 
 
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
