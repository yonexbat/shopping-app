import { Component, Signal } from '@angular/core';
import { AuthenticationService } from '../../services/authentication.service';
import { User } from '../../model/user';
import { JsonPipe } from '@angular/common';
import { LoginDetailComponent } from "../login-detail/login-detail.component";

@Component({
  selector: 'app-login',
  imports: [LoginDetailComponent],
  templateUrl: './login-container.component.html',
  styleUrl: './login-container.component.scss'
})
export class LoginContainerComponent {


  public user: Signal<User | undefined>;
  public isLoggedIn: Signal<boolean | undefined>;

  public constructor(private authService: AuthenticationService) {
    this.user = this.authService.user;
    this.isLoggedIn = this.authService.isLoggedIn;
  }

  public loginClick() {
    this.authService.login();
  }

  public logoffClick() {
    this.authService.logoff();
  }
}
