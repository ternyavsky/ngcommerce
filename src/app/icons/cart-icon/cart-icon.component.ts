import { Component, Input } from '@angular/core';
import { bootstrapCart } from '@ng-icons/bootstrap-icons';
import { NgIconComponent, provideIcons } from '@ng-icons/core';

@Component({
  selector: 'app-cart-icon',
  standalone: true,
  imports: [NgIconComponent],
  templateUrl: './cart-icon.component.html',
  styleUrl: './cart-icon.component.scss',
  providers: [provideIcons({ bootstrapCart })]
})
export class CartIconComponent {

  @Input({ required: true }) size = "0";
}
