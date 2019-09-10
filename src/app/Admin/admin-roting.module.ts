import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ViewLeaveComponent } from './Viewleave/viewleave.component';

import { ApproveComponent } from './approve/approve.component';
import { LeaveManageComponent } from './leaveManage/leaveManage.component';
import { DashboardComponent } from './Dashboard/dashboard.component';



const routes: Routes = [
    { path: 'viewleave', component: ViewLeaveComponent},
 
  {path:'LeaveId',component: ApproveComponent},
  {path:'leavemanage',component:LeaveManageComponent},
  {path:'dashboard',component:DashboardComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }