import { Component, Input } from '@angular/core';
import { bootstrapPerson } from '@ng-icons/bootstrap-icons';
import { NgIconComponent, provideIcons } from '@ng-icons/core';

@Component({
  selector: 'app-profile-icon',
  standalone: true,
  imports: [NgIconComponent],
  templateUrl: './profile-icon.component.html',
  styleUrl: './profile-icon.component.scss',
  providers: [provideIcons({ bootstrapPerson })]
})
export class ProfileIconComponent {

  @Input({ required: true }) size = "0";
}
