import { Component, Signal } from '@angular/core';
import { MenuDetailComponent } from '../menu-detail/menu-detail.component';
import { AuthenticationService } from '../../services/authentication.service';

@Component({
  selector: 'app-menu-container',
  imports: [MenuDetailComponent],
  templateUrl: './menu-container.component.html',
  styleUrl: './menu-container.component.scss',
})
export class MenuContainerComponent {
  
  isLoggedIn: Signal<boolean|undefined>;

  constructor(private authenticationService: AuthenticationService) {
    this.isLoggedIn = this.authenticationService.isLoggedIn;
  }
}
