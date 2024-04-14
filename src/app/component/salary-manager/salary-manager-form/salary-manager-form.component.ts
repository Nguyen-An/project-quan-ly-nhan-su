import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup, NonNullableFormBuilder, Validators } from '@angular/forms';
import { NZ_MODAL_DATA, NzModalRef } from 'ng-zorro-antd/modal';
import { MSG } from 'src/app/const/common';
import { GENDERS, POSITIONS, STATUS } from 'src/app/const/initValue';

@Component({
  selector: 'app-salary-manager-form',
  templateUrl: './salary-manager-form.component.html',
  styleUrls: ['./salary-manager-form.component.scss']
})
export class SalaryManagerFormComponent {

  constructor(
    private fb: NonNullableFormBuilder,
    @Inject(NZ_MODAL_DATA) public data: any,
    private modal: NzModalRef<SalaryManagerFormComponent>,
  ) {}

  MSG = MSG;
  GENDERS = GENDERS;
  POSITIONS = POSITIONS;
  STATUS = STATUS;

  validateForm: FormGroup<{
    userNameCtrl: FormControl<string>;            // Tên nhân viên
    userCodeCtrl: FormControl<string>;            // Mã nhân viên
    positionCtrl: FormControl<string>;            // Chức vụ
    salaryCtrl: FormControl<string>;              // Mức lương
    workDayCtrl: FormControl<string>;             // Ngày công 
    allowanceCtrl: FormControl<string>;           // Phụ cấp 
    bonusCtrl: FormControl<string>;               // Thưởng
    punishCtrl: FormControl<string>;              // Phạt
    advanceCtrl: FormControl<string>;             // Tạm ứng
    actuallyReceivedCtrl: FormControl<string>;    // Thực nhận
    statusCtrl: FormControl<string>;              // Trạng thái
    dateOfReceiptCtrl: FormControl<string>;       // Ngày nhận
  }> = this.fb.group({
    userNameCtrl: ['', [Validators.required]],
    userCodeCtrl: ['', [Validators.required]],
    positionCtrl: ['', [Validators.required]],
    salaryCtrl: ['', [Validators.required]],
    workDayCtrl: ['', [Validators.required]],
    allowanceCtrl: ['', [Validators.required]],
    bonusCtrl: ['', [Validators.required]],
    punishCtrl: ['', [Validators.required]],
    advanceCtrl: ['', [Validators.required]],
    actuallyReceivedCtrl: ['', [Validators.required]],
    statusCtrl: ['', [Validators.required]],
    dateOfReceiptCtrl: ['', [Validators.required]],
  });

  submitForm(): void {
    if (this.validateForm.valid) {
      console.log('submit', this.validateForm.value);
    } else {
      Object.values(this.validateForm.controls).forEach(control => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    }
  }

  closeFrom() {
    this.modal.close();
  }

}
