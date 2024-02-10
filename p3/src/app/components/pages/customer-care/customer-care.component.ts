import { Component } from '@angular/core';
import { NavComponent } from '../../units/nav/nav.component';
import { CareComponent } from '../../units/care/care.component';
import { FooterComponent } from '../../units/footer/footer.component';

@Component({
  selector: 'app-customer-care',
  standalone: true,
  imports: [NavComponent, CareComponent, FooterComponent],
  templateUrl: './customer-care.component.html',
  styleUrl: './customer-care.component.css'
})
export class CustomerCareComponent {

}
