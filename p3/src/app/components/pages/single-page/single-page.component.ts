import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../../../api.service';
import { NavComponent } from '../../units/nav/nav.component';
import { FooterComponent } from '../../units/footer/footer.component';

@Component({
  selector: 'app-single-page',
  standalone: true,
  imports: [SinglePageComponent, NavComponent, FooterComponent],
  templateUrl: './single-page.component.html',
  styleUrl: './single-page.component.css'
})
export class SinglePageComponent {
  constructor(private routeId: ActivatedRoute, private api: ApiService) { }
  data: any = []
  rating: number = 0

  ngOnInit() {
    this.api.getData().subscribe((res: any) => {
      let id = this.routeId.snapshot.paramMap.get('id')

      let response = res
      let product = response.filter((e: any) => e.id == id)
      this.data = product[0]
    })
  }
}
