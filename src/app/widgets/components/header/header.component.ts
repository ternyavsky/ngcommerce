import { Component } from '@angular/core';
import { MenuIconComponent } from '../../../icons/menu-icon/menu-icon.component';
import { SearchIconComponent } from '../../../icons/search-icon/search-icon.component';
import { ProfileIconComponent } from '../../../icons/profile-icon/profile-icon.component';
import { CartIconComponent } from '../../../icons/cart-icon/cart-icon.component';
import { SearchbarComponent } from '../searchbar/searchbar.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MenuIconComponent, SearchIconComponent, ProfileIconComponent, CartIconComponent, SearchbarComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

}
