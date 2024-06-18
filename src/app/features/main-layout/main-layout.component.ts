import { Component } from '@angular/core';
import { HeaderComponent } from '../../widgets/components/header/header.component';
import { FooterComponent } from '../../widgets/components/footer/footer.component';
import { RouterOutlet } from '@angular/router';
import { SalebarComponent } from '../../widgets/components/salebar/salebar.component';

@Component({
  selector: 'app-main-layout',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, RouterOutlet, SalebarComponent],
  templateUrl: './main-layout.component.html',
  styleUrl: './main-layout.component.scss'
})
export class MainLayoutComponent {

}
