import { Component } from '@angular/core';
// import { subscribe } from 'diagnostics_channel';
import { ApiService } from '../../api.service';
import { SlicePipe } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [SlicePipe, RouterLink],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  data: any = []
  constructor(public api: ApiService) { }
  ngOnInit() {
    this.api.getData().subscribe(response => {
      this.data = response
    })
  }


}