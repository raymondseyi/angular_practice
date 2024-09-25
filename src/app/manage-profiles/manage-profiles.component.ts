import { Component } from '@angular/core';
import { ProfileCardsComponent } from '../profile-cards/profile-cards.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-manage-profiles',
  standalone: true,
  imports: [ProfileCardsComponent,RouterModule],
  templateUrl: './manage-profiles.component.html',
  styleUrl: './manage-profiles.component.css',
})
export class ManageProfilesComponent {}
