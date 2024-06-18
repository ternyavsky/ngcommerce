import { Component, Input } from '@angular/core';
import { bootstrapMailbox } from '@ng-icons/bootstrap-icons';
import { NgIconComponent, provideIcons } from '@ng-icons/core';

@Component({
  selector: 'app-mail-icon',
  standalone: true,
  imports: [NgIconComponent],
  templateUrl: './mail-icon.component.html',
  styleUrl: './mail-icon.component.scss',
  providers: [provideIcons({ bootstrapMailbox })]
})
export class MailIconComponent {
  @Input({ required: true }) size = "0";

}
