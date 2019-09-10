import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginRoutingModule } from './login-routing.module';
import { SharedModule } from '../shared/shared.module';
import { CommonMaterialModule } from '../shared/common-material/common-material.module';

import { AuthService } from '../shared/auth/auth.service';


@NgModule({
  declarations: [LoginComponent, SignUpComponent],
  imports: [
    CommonModule,
    CommonMaterialModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    LoginRoutingModule,
   ],
   providers:[AuthService],
  exports:[LoginComponent, SignUpComponent]
})
export class LoginModule { }
