import { Component } from '@angular/core';
import { StarIconComponent } from '../../icons/star-icon/star-icon.component';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [StarIconComponent],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent {

}
