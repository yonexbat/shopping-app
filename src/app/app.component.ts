import { AsyncPipe } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { LoginContainerComponent } from './login/login-container/login-container.component';

@Component({
    selector: 'app-root',
    imports: [RouterOutlet, LoginContainerComponent, RouterLink, RouterLinkActive],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss'
})
export class AppComponent {

}
