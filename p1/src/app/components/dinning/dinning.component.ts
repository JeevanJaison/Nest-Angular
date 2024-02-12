import { Component } from '@angular/core';
import { BedroomComponent } from '../bedroom/bedroom.component';

@Component({
  selector: 'app-dinning',
  standalone: true,
  imports: [BedroomComponent],
  templateUrl: './dinning.component.html',
  styleUrl: './dinning.component.css'
})
export class DinningComponent {

}
