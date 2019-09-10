import {Component} from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/shared/auth/auth.service';


@Component({
  selector: 'app-sidebar',
  templateUrl: 'sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})

export class SideBarComponent {
  userIsAuthenticated = false;
  private authListenerSubs: Subscription;

  constructor(private authService: AuthService) {}

  
  

  public loginUser = '';
  


  ngOnInit() {
    this.authService.loginUserObservable$.subscribe(loginUser => this.loginUser= loginUser);
  }



  onLogout() {
    this.authService.logout();
  }
}

