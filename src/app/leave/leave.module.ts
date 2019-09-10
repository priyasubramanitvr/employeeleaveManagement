import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommonMaterialModule } from '../shared/common-material/common-material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LeaveComponent } from './leave.component';
import { LeaveRoutingModule } from './leave-routing.module';
import { LeaveService } from './leave.service';
import { EmpViewLeaveComponent } from './empviewleave/empviewleave.component';



@NgModule({
  declarations: [LeaveComponent,EmpViewLeaveComponent],
  imports: [
    CommonModule,
    CommonMaterialModule,
    FormsModule,
    ReactiveFormsModule,
    CommonMaterialModule,
    LeaveRoutingModule
  ],
  providers:[LeaveService],
  exports: [LeaveComponent,EmpViewLeaveComponent]
})
export class LeaveModule { }
