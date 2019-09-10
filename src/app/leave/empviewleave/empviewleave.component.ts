import { Component, OnInit } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { LeaveService } from 'src/app/leave/leave.service';
import { Leave } from 'src/app/leave/leave.model';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { FormGroup } from '@angular/forms';

@Component({
  
    templateUrl: './empviewleave.component.html',
    styleUrls: ['./empviewleave.component.css']
  })
  export class EmpViewLeaveComponent implements OnInit{

    public leaves:Leave[] = [];
    
    private leaveSub: Subscription;
    constructor(private leaveService: LeaveService, private router:Router,
    
      private http:HttpClient) { }

    ngOnInit(){
      
 
      
      this.leaveService.getDetails()
   this.leaveSub = this.leaveService.getDetails()
      
      .subscribe((leaves: Leave[]) => {
        
        this.leaves = leaves;
        console.log("emplist::"+JSON.stringify(this.leaves));
      });
    
    
    }
    
    
    
    
    
    
    
    }
  