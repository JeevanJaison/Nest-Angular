import { Component } from '@angular/core';
import { CardComponent } from '../../card/card.component';
import { FooterComponent } from '../../units/footer/footer.component';
import { NavComponent } from '../../units/nav/nav.component';
import { CarrosalComponent } from '../../carrosal/carrosal.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CardComponent, FooterComponent, NavComponent, CarrosalComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
