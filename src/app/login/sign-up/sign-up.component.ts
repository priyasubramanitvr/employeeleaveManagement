import { Component, NgZone, OnDestroy, OnInit } from '@angular/core';
import { NgForm, FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../../shared/auth/auth.service';
import { Router } from '@angular/router';
import { Subscription, Observable } from 'rxjs';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit, OnDestroy{
  private authStatusSub: Subscription;

  signupForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl(null,[Validators.required,Validators.email]),
    password: new FormControl(''),
    phoneNumber: new FormControl('')
  });
  
  constructor(public authService: AuthService, private router:Router) {}

  onSignup() {
    if (this.signupForm.invalid) {
      return;
    }
    this.authService.createUser(this.signupForm.value);

  }
  
 
ngOnInit() {
    this.authStatusSub = this.authService.getAuthStatusListener().subscribe(
     
    );
  }


  ngOnDestroy() {
    this.authStatusSub.unsubscribe();
  }
  
}
