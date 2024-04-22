import { Component } from '@angular/core';
import { LoginService } from './services/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isCollapsed = false;

  isLogin: boolean = false;
  userName: string = ''

  constructor(private loginService: LoginService ) {
    this.loginService.isLogin$.subscribe(data => {
      this.isLogin = data;
    });

    this.loginService.userName$.subscribe((data: any) => {
      this.userName = data;
    });
  }

  logout() {
    this.loginService.logut();
  }
}
