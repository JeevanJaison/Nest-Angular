import { Component } from '@angular/core';
import { SignComponent } from '../../units/sign/sign.component';
import { NavComponent } from '../../units/nav/nav.component';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [SignComponent, NavComponent],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {

}
