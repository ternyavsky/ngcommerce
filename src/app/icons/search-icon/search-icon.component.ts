import { Component, Input } from '@angular/core';
import { bootstrapSearch } from '@ng-icons/bootstrap-icons';
import { NgIconComponent, provideIcons } from '@ng-icons/core';

@Component({
  selector: 'app-search-icon',
  standalone: true,
  imports: [NgIconComponent],
  templateUrl: './search-icon.component.html',
  styleUrl: './search-icon.component.scss',
  providers: [provideIcons({ bootstrapSearch })]
})
export class SearchIconComponent {
  @Input({ required: true }) size = "0";
}
