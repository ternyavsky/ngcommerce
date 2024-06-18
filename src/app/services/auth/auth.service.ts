import { Injectable } from '@angular/core';
import { BaseService } from '../base/base.service';
import { LoginReq } from './types/login.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService extends BaseService {

  login(data: LoginReq) {
    const formData = new FormData();
    formData.append('username', data.username)
    formData.append('password', data.password)
    return this.baseInstance.post(`${this.baseUrl}/auth/token`, formData)
  }

}
