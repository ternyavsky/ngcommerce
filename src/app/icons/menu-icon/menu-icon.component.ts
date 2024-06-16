import { Component, Input } from '@angular/core';
import { bootstrapList } from '@ng-icons/bootstrap-icons';
import { NgIconComponent, provideIcons } from '@ng-icons/core';

@Component({
  selector: 'app-menu-icon',
  standalone: true,
  imports: [NgIconComponent],
  templateUrl: './menu-icon.component.html',
  styleUrl: './menu-icon.component.scss',
  providers: [provideIcons({ bootstrapList })]
})
export class MenuIconComponent {
  @Input({ required: true }) size = "0";

}
