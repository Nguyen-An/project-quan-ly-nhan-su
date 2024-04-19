import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd/message';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private isLogin = new BehaviorSubject<boolean>(false);
  isLogin$ = this.isLogin.asObservable();

  constructor(
    private http: HttpClient,
    private message: NzMessageService
  ) { }

  login(body: any) {
    const url = 'http://localhost:3333/api/account-service/login';
  
    this.http.post(url, body).subscribe(
      (response) => {
        // Xử lý kết quả ở đây
        this.message.success('Đăng nhập thành công');
        this.isLogin.next(true);
      },
      (error) => {
        this.message.warning('Tài khoản, mật khẩu không chính xác');
      }
    );
  }
}
