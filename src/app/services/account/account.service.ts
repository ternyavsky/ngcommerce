import { Injectable } from '@angular/core';
import { BaseService } from '../base/base.service';

@Injectable({
  providedIn: 'root'
})
export class AccountService extends BaseService {


  public getAccount() {
    return this.baseInstance.get(`${this.baseUrl}/account/me`).subscribe(res => console.log(res))
  }
}
