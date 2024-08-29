import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-websites',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './websites.component.html',
  styleUrl: './websites.component.css'
})
export class WebsitesComponent {
  title = 'agency';
}
