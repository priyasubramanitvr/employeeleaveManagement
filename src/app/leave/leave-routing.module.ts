import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LeaveComponent } from './leave.component';
import {  EmpViewLeaveComponent } from './empviewleave/empviewleave.component';
import { AuthGuard } from '../shared/auth/auth.guard';


const routes: Routes = [
  { path: 'leave', component: LeaveComponent},
  {path:'empviewleave',component:EmpViewLeaveComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  

})
export class LeaveRoutingModule { }