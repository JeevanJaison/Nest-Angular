import { Component } from '@angular/core';
import { LoginComponent } from '../../units/login/login.component';
import { NavComponent } from '../../units/nav/nav.component';

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [LoginComponent, NavComponent],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css'
})
export class LoginPageComponent {

}
