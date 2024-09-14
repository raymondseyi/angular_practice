import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-safety-profile',
  standalone: true,
  imports: [],
  templateUrl: './safety-profile.component.html',
  styleUrl: './safety-profile.component.css'
})
export class SafetyProfileComponent {
  @Input() safetyImg = ""
  @Input() safetyTitle = ""
}
