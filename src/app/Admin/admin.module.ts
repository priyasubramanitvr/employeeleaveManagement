import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommonMaterialModule } from '../shared/common-material/common-material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { AdminRoutingModule } from './admin-roting.module';
import { ApproveComponent } from './approve/approve.component';
import { ViewLeaveComponent } from './Viewleave/viewleave.component';
import { LeaveManageComponent } from './leaveManage/leaveManage.component';
import { DashboardComponent } from './Dashboard/dashboard.component';



@NgModule({
  declarations: [ApproveComponent,ViewLeaveComponent,LeaveManageComponent,DashboardComponent],
  imports: [
    CommonModule,
    CommonMaterialModule,
    FormsModule,
    ReactiveFormsModule,
    CommonMaterialModule,
    AdminRoutingModule
  ],
  providers:[],
  exports: [ApproveComponent,ViewLeaveComponent,LeaveManageComponent,DashboardComponent]
})
export class AdminModule { }
