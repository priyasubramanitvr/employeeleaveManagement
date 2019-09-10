import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Leave } from 'src/app/leave/leave.model';
import { LeaveService } from 'src/app/leave/leave.service';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';



@Component({
  selector: 'app-approve',
  templateUrl: './approve.component.html',
  styleUrls: ['./approve.component.css']
})
export class ApproveComponent  implements OnInit{
 // public leaves:Leave[]=[];
  public leaves: any;
  id: String;
  
  
  constructor(private leaveservice:LeaveService,private router:Router,private http:HttpClient){

  }
  
  leaveForm = new FormGroup({
    _id: new FormControl(this.id,Validators.required),
    employeeName: new FormControl(null,Validators.required),
    department:new FormControl(null,Validators.required),
  
    leaveFromDate:new FormControl(null,Validators.required),
    leaveToDate:new FormControl(null,Validators.required),
    reasonForLeave:new FormControl(null,Validators.required),
    numberOfDays:new FormControl(null,Validators.required),
    description: new FormControl(null,Validators.required),
    leaveStatus:new FormControl(null)


  });
  
   ngOnInit(){
    let leaveId = sessionStorage.getItem("LeaveId");
    if(!leaveId) {
      alert("Invalid action.")
      this.router.navigate(['edit-employee/:id'])
      return;
    }
    this.leaveservice.getLeaveById(leaveId)
      .subscribe( result => {
        this.leaveForm.setValue(result);
      });
  }
    

    onSubmit(){
         console.log('admin:'+JSON.stringify(this.leaveForm.value));
         this.leaveservice.updateleave(this.leaveForm.value)
         .subscribe(data => {
           this.leaves = data;
           console.log('admincon:'+JSON.stringify(data));
         });

  }
}
  

