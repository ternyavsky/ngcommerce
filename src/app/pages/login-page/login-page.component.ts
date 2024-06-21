import { Component, inject, OnInit } from '@angular/core';
import { OutlineBtnComponent } from '../../shared/ui/outline-btn/outline-btn.component';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms'
import { AuthService } from '../../services/auth/auth.service';
import { Router } from '@angular/router';
import { AccountService } from '../../services/account/account.service';

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [OutlineBtnComponent, ReactiveFormsModule],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.scss'
})
export class LoginPageComponent implements OnInit {
  authService: AuthService = inject(AuthService);
  accountService: AccountService = inject(AccountService);
  router: Router = inject(Router);
  form = new FormGroup({
    username: new FormControl<string>("", Validators.required),
    password: new FormControl<string>("", Validators.required),
  })

  ngOnInit(): void {
    this.accountService.getAccount()
  }

  onSubmit(): void {
    if (this.form.valid) {
      this.authService.login({ username: this.form.value.username!, password: this.form.value.password! })
        .subscribe(value => {
          this.router.navigate(["/"])
          console.log(value)


        })
    }

  }

}
