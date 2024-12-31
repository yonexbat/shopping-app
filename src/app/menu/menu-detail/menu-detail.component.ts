import { Component, input } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-menu-detail',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './menu-detail.component.html',
  styleUrl: './menu-detail.component.scss'
})
export class MenuDetailComponent {
  userLoggedIn = input.required<boolean|undefined>();
}
