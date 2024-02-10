import { Component } from '@angular/core';
import { CardComponent } from '../../card/card.component';
import { NavComponent } from '../../units/nav/nav.component';

@Component({
  selector: 'app-deals',
  standalone: true,
  imports: [CardComponent, NavComponent],
  templateUrl: './deals.component.html',
  styleUrl: './deals.component.css'
})
export class DealsComponent {

}
