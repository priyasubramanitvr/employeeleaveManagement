import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SideBarComponent } from './sidebar/sidebar.component';
import { CommonMaterialModule } from '../shared/common-material/common-material.module';
import { LoginModule } from '../login/login.module';




@NgModule({
  declarations: [HeaderComponent, FooterComponent,HomeComponent,SideBarComponent],
  imports: [
    CommonModule,
    RouterModule,
    CommonMaterialModule,
    LoginModule
  ],
  exports: [ HeaderComponent, FooterComponent,HomeComponent,SideBarComponent],
  providers: []
})
export class CoreModule { }
