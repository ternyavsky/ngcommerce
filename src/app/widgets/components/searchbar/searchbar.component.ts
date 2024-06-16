import { Component } from '@angular/core';
import { SearchIconComponent } from '../../../icons/search-icon/search-icon.component';

@Component({
  selector: 'app-searchbar',
  standalone: true,
  imports: [SearchIconComponent],
  templateUrl: './searchbar.component.html',
  styleUrl: './searchbar.component.scss'
})
export class SearchbarComponent {

}
