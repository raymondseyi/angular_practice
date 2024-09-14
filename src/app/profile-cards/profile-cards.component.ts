import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-profile-cards',
  standalone: true,
  imports: [],
  templateUrl: './profile-cards.component.html',
  styleUrl: './profile-cards.component.css'
})
export class ProfileCardsComponent {
  @Input() profileImg = ""
  @Input() profileName = ""
}

