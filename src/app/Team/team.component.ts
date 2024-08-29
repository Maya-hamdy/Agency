import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-team',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './team.component.html',
  styleUrl: './team.component.css'
})
export class TeamComponent {
  title = 'agency';
}
