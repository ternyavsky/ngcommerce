import { Component } from '@angular/core';
import { BlackBtnComponent } from '../../shared/ui/black-btn/black-btn.component';

@Component({
  selector: 'app-main-screen',
  standalone: true,
  imports: [
    BlackBtnComponent
  ],
  templateUrl: './main-screen.component.html',
  styleUrl: './main-screen.component.scss'
})
export class MainScreenComponent {

  scrollEl($element: any): void {
    (document.getElementById($element) as HTMLElement)?.scrollIntoView({ behavior: "smooth", inline: "start", block: "start" })
  }

}
