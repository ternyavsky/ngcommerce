import { Component } from '@angular/core';
import { SalebarComponent } from '../../widgets/components/salebar/salebar.component';
import { HeaderComponent } from '../../widgets/components/header/header.component';
import { MainScreenComponent } from '../../features/main-screen/main-screen.component';
import { MarqueComponent } from '../../features/marque/marque.component';
import { ArrivalsScreenComponent } from '../../features/arrivals-screen/arrivals-screen.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [
    SalebarComponent,
    HeaderComponent,
    MainScreenComponent,
    MarqueComponent,
    ArrivalsScreenComponent
  ],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {

}
