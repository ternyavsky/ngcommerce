import { Component } from '@angular/core';
import { ProductComponent } from '../../entities/product/product.component';
import { OutlineBtnComponent } from '../../shared/ui/outline-btn/outline-btn.component';
import { MailbarComponent } from '../../widgets/components/mailbar/mailbar.component';

@Component({
  selector: 'app-arrivals-screen',
  standalone: true,
  imports: [ProductComponent, OutlineBtnComponent, MailbarComponent],
  templateUrl: './arrivals-screen.component.html',
  styleUrl: './arrivals-screen.component.scss'
})
export class ArrivalsScreenComponent {

}
