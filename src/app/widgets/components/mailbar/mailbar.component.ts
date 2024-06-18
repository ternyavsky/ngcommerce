import { Component } from '@angular/core';
import { InputComponent } from '../../../shared/ui/input/input.component';
import { MailIconComponent } from '../../../icons/mail-icon/mail-icon.component';

@Component({
  selector: 'app-mailbar',
  standalone: true,
  imports: [InputComponent, MailIconComponent],
  templateUrl: './mailbar.component.html',
  styleUrl: './mailbar.component.scss'
})
export class MailbarComponent {

}
