import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }

  private isLogin = new BehaviorSubject<boolean>(true);
  isLogin$ = this.isLogin.asObservable();

  login() {
    this.isLogin.next(true);
  }
}
