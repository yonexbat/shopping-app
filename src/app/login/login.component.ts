import { Component, Signal, WritableSignal } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import { User } from '../model/user';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [JsonPipe],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {


  public user: Signal<User | undefined >;
  public isLoggedIn: Signal<boolean | undefined>;

  public constructor(private authService: AuthenticationService){
    this.user = this.authService.user;
    this.isLoggedIn = this.authService.isLoggedIn;
  }

  public loginClick(){
    this.authService.login();
  }

  public logoffClick(){
    this.authService.logoff();
  }
}
