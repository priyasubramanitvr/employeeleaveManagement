import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { Subject, Observable } from 'rxjs';
import { Router } from '@angular/router';
import { User } from '../model/user.model';
import { map} from 'rxjs/operators';



@Injectable({ providedIn: "root" })
export class AuthService {
  

  //email(): string {
//return 'working' ;
 // }

  private loginUserSubject$:Subject<string> = new Subject<string>();
          loginUserObservable$:Observable<string> = this.loginUserSubject$.asObservable();
  private isAuthenticated = false;
  private token: string;
  public  users:User[]=[];
  private authStatusListener = new Subject<boolean>();
  private loginUser:User = null;
 
  constructor(private http: HttpClient,private router: Router) {}


  getToken() {
    return this.token;
  }

  getIsAuth() {
    return this.isAuthenticated;
  }

  getAuthStatusListener() {
    return this.authStatusListener.asObservable();
  }

  
getUserdata(){
  return this.http.get<User[]>('http://localhost:3000/api/user');
}

setResult(result: User[]){
  this.users = result;
}

 createUser(user:User) {
  this.http
    .post("http://localhost:3000/api/user/signup", user)
    .subscribe(() => {
      this.router.navigate(["/login"]);
    }, error => {
      this.authStatusListener.next(false);
    });
}

  
  login(email:string,password:string) {
   
     return this.http.post<{token: string, user: User}>("http://localhost:3000/api/user/login",{
       email:email,password:password
     })
         .pipe(map(result => {
           if(result){
            // this.users =result;
            console.log('success:'+JSON.stringify(result));
             this.setLoginUser(result.user);
             }
            else{
              localStorage.setItem('result',null);
              JSON.parse(localStorage.getItem('result'));

            }

           return result;
         }));

          
       }
  
    setLoginUser(user:User){
      console.log('setLoginUser:'+JSON.stringify(user));
      this.loginUser = user;
      this.loginUserSubject$.next(user.email);
    }

    getLoginUser(): User {
      return this.loginUser;
    }


    logout() {
      this.token = null;
      this.users = null;
      localStorage.clear();
    }
}
