import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';




@Component({
  selector: 'app-end',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './end.component.html',
  styleUrl: './end.component.css'
})
export class EndComponent {
  title = 'agency';
}