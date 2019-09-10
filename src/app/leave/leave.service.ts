import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import{ Leave} from './leave.model';

import { Subject, Observable } from 'rxjs';


@Injectable({
    providedIn: 'root'
  })
export class LeaveService{
  selectedLeave: any;
    constructor(private http: HttpClient, private router: Router) { }
    private leaveUpdated = new Subject<Leave[]>();
    public leaves : Leave[] = [];
    

save(leave: Leave):Observable<Leave>{
    //console.log(leave, "Service log for leave approve");
    return this.http.post<Leave>('http://localhost:3000/api/leave/apply-leave',leave);
  }

 
  getDetails():Observable<Leave[]>{
      return this.http.get<Leave[]>('http://localhost:3000/api/leave');
}

getLeaveById(id:string){
  return this.http.get("http://localhost:3000/api/leave/" + id);
}
  getleaveUpdateListener() {
    return this.leaveUpdated.asObservable();
  }

 
  setData(data: Leave[]){
    this.leaves = data;
  }

  setItem(result:Leave[]){
    this.leaves=result
  }

 /* updateleave(leave:Leave) {
   return this.http.put("http://localhost:3000/api/leave/"+`${leave._id}`, leave)
     }
     updateleave(leave:Leave) {
      return this.http.put("http://localhost:3000/api/leave/"+`/${leave._id}`, leave)
         .subscribe(response => {
           const updatedleaves = [...this.leaves];
           const oldLeaveIndex = updatedleaves.findIndex(p => p.id === leave.id);
           updatedleaves[oldLeaveIndex] = leave;
           this.leaves = updatedleaves;
           this.leaveUpdated.next([...this.leaves]);
           this.router.navigate(["/"]);
         });

     }*/

updateleave(leave: Leave) {
   
  return this.http.put("http://localhost:3000/api/leave" + `/${leave._id}`, leave);
  
}
}

    /*

     private leaveUpdated = new Subject<Leave[]>();
getAllLeaves():Observable<Leave[]>{
  
    return this.http.get<Leave[]>('http://localhost:3000/api/leave');
}*/


 /*applyLeave(leave:Leave){
    this.http
    .post("http://localhost:3000/api/leave/apply-leave", leave)
  }*/


