import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './Home/home.component';
import { ServicesComponent } from './Services/services.component';
import { PortfolioComponent } from './Portfolio/portfolio.component';
import { AboutComponent } from './About/about.component';
import { TeamComponent } from './Team/team.component';
import { WebsitesComponent } from './Websites/websites.component';
import { ContactComponent } from './Contact/contact.component';
import { EndComponent } from './End/end.component';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HomeComponent, ServicesComponent, PortfolioComponent, AboutComponent, TeamComponent, WebsitesComponent, ContactComponent, EndComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'agency';
}
