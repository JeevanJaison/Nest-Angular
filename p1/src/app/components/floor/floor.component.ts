import { Component } from '@angular/core';
import { DinningComponent } from '../dinning/dinning.component';
import { BedroomComponent } from '../bedroom/bedroom.component';
import { HallComponent } from '../hall/hall.component';
import { KitchenComponent } from '../kitchen/kitchen.component';
import { PoolComponent } from '../pool/pool.component';
import { EntranceComponent } from '../entrance/entrance.component';

@Component({
  selector: 'app-floor',
  standalone: true,
  imports: [DinningComponent, BedroomComponent, HallComponent, KitchenComponent, PoolComponent, EntranceComponent],
  templateUrl: './floor.component.html',
  styleUrl: './floor.component.css'
})
export class FloorComponent {

}
