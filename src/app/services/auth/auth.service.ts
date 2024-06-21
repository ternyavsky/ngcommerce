import { Injectable, inject } from '@angular/core';
import { BaseService } from '../base/base.service';
import { LoginReq, LoginRes } from './types/login.interface';
import { Observable, tap } from 'rxjs';
import { CookieService } from "ngx-cookie-service";

@Injectable({
  providedIn: 'root'
})
export class AuthService extends BaseService {
  cookieSvc = inject(CookieService);


  token: string | null = this.cookieSvc.get("access_token");
  refresh_token: string | null = null;


  get IsAuth() {
    if (!this.token) {
      this.token = this.cookieSvc.get("access_token")
    }
    return !!this.token;
  }

  login(data: LoginReq) {
    const formData = new FormData();
    formData.append('username', data.username)
    formData.append('password', data.password)
    return this.baseInstance.post<LoginRes>(`${this.baseUrl}/auth/token`, formData).pipe(tap(value => {
      this.token = value.access_token
      this.refresh_token = value.refresh_token


      this.cookieSvc.set('access_token', this.token)
      this.cookieSvc.set('refresh_token', this.refresh_token)
    }))
  }

}
