import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../shared/auth/auth.service';
import { Router, ActivatedRoute } from '@angular/router';
import { first } from 'rxjs/operators';




@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  submitted = false;
  constructor(private authService: AuthService, private router: Router, 
    private route: ActivatedRoute, ) {

  }

  loginForm = new FormGroup({
    email: new FormControl(null, [Validators.required]),
    password: new FormControl(''),
  });

  get f() { 
    return this.loginForm.controls; 
  }

  onLogin() {
    this.submitted = true;
    if (this.loginForm.invalid) {
      return;
    }
    
    this.authService.login(this.f.email.value, this.f.password.value)
      .pipe(first())
      .subscribe(
        result => {
          this.router.navigate(['/leave']);
        },
        error => {
          alert("Username or password is incorrect");
          console.log(error, { message: 'Username or password is incorrect' } );
        
         } );

        

  }



}

