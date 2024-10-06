import { Component, input, output } from '@angular/core';
import { User } from '../model/user';

@Component({
  selector: 'app-login-detail',
  standalone: true,
  imports: [],
  templateUrl: './login-detail.component.html',
  styleUrl: './login-detail.component.scss'
})
export class LoginDetailComponent {
  public user = input<User>();
  public isLoggedIn = input<boolean>();      
  public login = output();
  public logoff = output();

  public loginClick(){    
    this.login.emit();
  }

  public logoffClick(){    
    this.logoff.emit();
  }
}
