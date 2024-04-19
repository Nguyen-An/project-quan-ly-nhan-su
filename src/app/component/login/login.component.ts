import { Component } from '@angular/core';
import { FormControl, FormGroup, NonNullableFormBuilder, Validators } from '@angular/forms';
import { NzModalService } from 'ng-zorro-antd/modal';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  isVisible = false;
  validateForm: FormGroup<{
    userName: FormControl<string>;
    password: FormControl<string>;
    remember: FormControl<boolean>;
  }> = this.fb.group({
    userName: ['', [Validators.required]],
    password: ['', [Validators.required]],
    remember: [true]
  });

  constructor(
    private modalService: NzModalService,
    private fb: NonNullableFormBuilder,
    private loginService: LoginService,
  ) { }

  // Hàm để mở modal
  openModal(): void {
    this.modalService.create({
      nzTitle: 'Modal Title',
      nzContent: 'Content of the modal',
      // Các thuộc tính khác của modal có thể được thêm vào ở đây
    });
  }
  
  submitForm(): void {
    if (this.validateForm.valid) {
      const body = {
        email: this.validateForm.value.userName,
        password:  this.validateForm.value.password
      };
      this.loginService.login(body);
    } else {
      Object.values(this.validateForm.controls).forEach(control => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    }
  }
  
}
