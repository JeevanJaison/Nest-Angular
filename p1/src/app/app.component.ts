import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DinningComponent } from './components/dinning/dinning.component';
import { BedroomComponent } from './components/bedroom/bedroom.component';
import { FloorComponent } from './components/floor/floor.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FloorComponent, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'p1';

  name: string = "Jeevan Jaison"
  email: string = ""

  handleClick() {
    alert("The plan has been approved.");
  }
}
