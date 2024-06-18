import { Component } from '@angular/core';
import { OutlineBtnComponent } from '../../shared/ui/outline-btn/outline-btn.component';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms'

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [OutlineBtnComponent, ReactiveFormsModule],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.scss'
})
export class LoginPageComponent {
  form = new FormGroup({
    username: new FormControl<string | null>(null),
    password: new FormControl<string | null>(null),
  })

  onSubmit(): void {
    console.log(this.form.value)

  }

}
