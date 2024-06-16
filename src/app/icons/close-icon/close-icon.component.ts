import { Component } from '@angular/core';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { bootstrapXLg } from '@ng-icons/bootstrap-icons';


@Component({
  standalone: true,
  selector: 'app-close-icon',
  imports: [NgIconComponent],
  templateUrl: './close-icon.component.html',
  styleUrl: './close-icon.component.scss',
  providers: [provideIcons({ bootstrapXLg })]
})
export class CloseIconComponent {

}
