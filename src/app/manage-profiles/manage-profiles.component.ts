import { Component } from '@angular/core';
import { ProfileCardsComponent } from "../profile-cards/profile-cards.component";

@Component({
  selector: 'app-manage-profiles',
  standalone: true,
  imports: [ProfileCardsComponent],
  templateUrl: './manage-profiles.component.html',
  styleUrl: './manage-profiles.component.css'
})
export class ManageProfilesComponent {

}
