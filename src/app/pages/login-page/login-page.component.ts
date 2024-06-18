import { Component, inject } from '@angular/core';
import { OutlineBtnComponent } from '../../shared/ui/outline-btn/outline-btn.component';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms'
import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [OutlineBtnComponent, ReactiveFormsModule],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.scss'
})
export class LoginPageComponent {
  authService: AuthService = inject(AuthService);
  form = new FormGroup({
    username: new FormControl<string>("", Validators.required),
    password: new FormControl<string>("", Validators.required),
  })

  onSubmit(): void {
    if (this.form.valid) {
      this.authService.login({ username: this.form.value.username!, password: this.form.value.password! })
        .subscribe(val => console.log(val))
    }

  }

}
