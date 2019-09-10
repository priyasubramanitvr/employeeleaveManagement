import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { LeaveService } from './leave.service';
import { Leave } from './leave.model';
import { AuthService } from '../shared/auth/auth.service';


@Component({
  selector: 'app-leave',
  templateUrl: './leave.component.html',
  styleUrls: ['./leave.component.css']
})
export class LeaveComponent  implements OnInit{
 
  private leave:Leave
  
  leaveBalance:boolean=false;
applyLeave:boolean=true;
leaveFromDate=Date();
leaveToDate=Date();
days:any;
todateSec:any;
fromdateSec:any;
millisecondsPerDay:any;
diff:any;
weeks:any;
leaveDays='';
  

  create_leave_req_msg: string;
  submitted = true;
  public has_error = false;
  constructor(private leaveservice:LeaveService,private authService:AuthService){

  }

  leaveForm = new FormGroup({
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
   

   }

   onSubmit() {
      this.submitted = true;
         console.log('empleave:'+JSON.stringify(this.leaveForm.value));
        
         this.leaveservice.save(this.leaveForm.value)
         .subscribe(data => {
           this.leave = data;
           console.log('empapply:'+JSON.stringify(data));
         this.create_leave_req_msg = 'Leave Request succesfully Submitted';
         this.leaveForm.reset();
         this.submitted = false;
       }, error => {
         
         this.has_error = true;
         this.create_leave_req_msg = error.error.message;
       });
      }
      fromJsonDate(e): string {
        const bDate: Date = new Date(e);
        return bDate.toISOString().substring(0, 10); 
      
      }
     // fromatDate(e) {
      //  const convertDate:Date  = new Date(e.target.value).toISOString();
      //  this.leaveForm.get('leaveFromDate').setValue(convertDate,{
        //  onlyself:true
       // })
     //   return convertDate.toISOString().substring(0, 10);  //Ignore time
     // }

       onClear() {
        this.leaveForm.reset();
       
     }

     onKeyUpfromdate(event: any) {
      this.leaveFromDate = event.target.value;
    //  console.log(this.fromDate);
      this.todateSec = new Date(this.leaveToDate);
      this.fromdateSec = new Date(this.leaveFromDate);
       
      if (this.todateSec < this.fromdateSec)
      alert('To date must be greater that from date!');
     
  

  }

  onKeyUptoDate(event: any) {
    this.leaveToDate = event.target.value;
   // console.log(this.toDate);
    //alert(this.toDate);
    //alert(this.fromDate);
     
    this.todateSec = new Date(this.leaveToDate);
    this.fromdateSec = new Date(this.leaveFromDate);
     
    if (this.todateSec < this.fromdateSec)
    alert('To date must be greater that from date!');
  

}
}