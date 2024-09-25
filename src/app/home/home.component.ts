import { Component } from '@angular/core';
import { NavbarComponent } from "../navbar/navbar.component";
import { VideoBannerComponent } from "../video-banner/video-banner.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavbarComponent, VideoBannerComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
