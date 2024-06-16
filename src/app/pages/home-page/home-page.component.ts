import { Component } from '@angular/core';
import { SalebarComponent } from '../../widgets/components/salebar/salebar.component';
import { HeaderComponent } from '../../widgets/components/header/header.component';
import { SearchbarComponent } from '../../widgets/components/searchbar/searchbar.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [
    SalebarComponent,
    HeaderComponent,
  ],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {

}
