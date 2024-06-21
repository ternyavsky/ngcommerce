import { Component, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CloseIconComponent } from '../../../icons/close-icon/close-icon.component';
import { AuthService } from '../../../services/auth/auth.service';

@Component({
  selector: 'app-salebar',
  standalone: true,
  imports: [RouterLink, CloseIconComponent],
  templateUrl: './salebar.component.html',
  styleUrl: './salebar.component.scss'
})
export class SalebarComponent {
  public authService: AuthService = inject(AuthService);
  public isShow = !this.authService.IsAuth;
  //
  setShow(): void {
    this.isShow = false;
  }

}
