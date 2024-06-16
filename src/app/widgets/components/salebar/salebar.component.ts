import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CloseIconComponent } from '../../../icons/close-icon/close-icon.component';

@Component({
  selector: 'app-salebar',
  standalone: true,
  imports: [RouterLink, CloseIconComponent],
  templateUrl: './salebar.component.html',
  styleUrl: './salebar.component.scss'
})
export class SalebarComponent {
  public isShow = signal<boolean>(true);

}
