import { Component } from '@angular/core';
import { WcComponent } from '../wc/wc.component';

@Component({
  selector: 'app-bedroom',
  standalone: true,
  imports: [WcComponent],
  templateUrl: './bedroom.component.html',
  styleUrl: './bedroom.component.css'
})
export class BedroomComponent {

}
