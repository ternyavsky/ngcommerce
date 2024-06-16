import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-black-btn',
  standalone: true,
  imports: [],
  templateUrl: './black-btn.component.html',
  styleUrl: './black-btn.component.scss'
})
export class BlackBtnComponent {
  @Input({ required: true }) width = "0";

}
