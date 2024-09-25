import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-profile-cards',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './profile-cards.component.html',
  styleUrl: './profile-cards.component.css'
})
export class ProfileCardsComponent {
  @Input() profileImg = ""
  @Input() profileName = ""
}

