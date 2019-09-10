import { Component, OnInit } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { LeaveService } from 'src/app/leave/leave.service';
import { Leave } from 'src/app/leave/leave.model';
import { Router } from '@angular/router';

@Component({
    selector: 'app-leave',
    templateUrl: './viewleave.component.html',
    styleUrls: ['./viewleave.component.css']
  })
  export class ViewLeaveComponent implements OnInit{

    public leaves:Leave[] = [];
    id:string
    constructor(private leaveService: LeaveService, private router:Router,
    
      private http:HttpClient) { }

    ngOnInit(){
      
      this.leaveService.getDetails()
      .subscribe(data => {
        this.leaves = data;
        this.leaveService.setData(this.leaves);
        console.log("adminapp::"+JSON.stringify(this.leaves));
      });
      
    }
 

  editEmp(leave: Leave): void {
    this.id = leave._id
    sessionStorage.removeItem("LeaveId");
    sessionStorage.setItem("LeaveId", leave._id.toString());
    
    this.router.navigate(['LeaveId'])
  };
    }
  