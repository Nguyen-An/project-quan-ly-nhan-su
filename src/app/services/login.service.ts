import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd/message';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private isLogin = new BehaviorSubject<boolean>(true);
  isLogin$ = this.isLogin.asObservable();

  private userName = new BehaviorSubject<string>('--');
  userName$ = this.userName.asObservable();

  constructor(
    private http: HttpClient,
    private message: NzMessageService
  ) { }

  login(body: any) {
    const url = 'http://localhost:3333/api/account-service/login';
  
    this.http.post(url, body).subscribe(
      (response: any) => {
        // Xử lý kết quả ở đây
        this.message.success('Đăng nhập thành công');
        this.isLogin.next(true);
        if(response?.accountname) this.userName.next(response?.accountname);
      },
      (error) => {
        this.message.warning('Tài khoản, mật khẩu không chính xác');
      }
    );
  }

  logut() {
    this.isLogin.next(false);
  }
}
