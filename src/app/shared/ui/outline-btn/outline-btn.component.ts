import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-outline-btn',
  standalone: true,
  imports: [],
  templateUrl: './outline-btn.component.html',
  styleUrl: './outline-btn.component.scss'
})
export class OutlineBtnComponent {
  @Input({ required: true }) width = "0";
  @Input() value = "View All";


}
