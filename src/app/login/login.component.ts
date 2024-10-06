import { Component, WritableSignal } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
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


  public user: WritableSignal<User | undefined>;

  public constructor(private authService: AuthenticationService){
    this.user = this.authService.user;
  }

  public loginClick(){
    this.authService.login();
  }

  public logoffClick(){
    this.authService.logoff();
  }
}
