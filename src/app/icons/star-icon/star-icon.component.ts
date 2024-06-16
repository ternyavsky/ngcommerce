import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-star-icon',
  standalone: true,
  imports: [],
  templateUrl: './star-icon.component.html',
  styleUrl: './star-icon.component.scss'
})
export class StarIconComponent {
  @Input({ required: true }) size = "0";

}
