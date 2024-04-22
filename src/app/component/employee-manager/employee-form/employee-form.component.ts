import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup, NonNullableFormBuilder, Validators } from '@angular/forms';
import { NZ_MODAL_DATA, NzModalRef } from 'ng-zorro-antd/modal';
import { MODE_FORM, MSG } from 'src/app/const/common';
import { GENDERS, POSITIONS, STATUS, STATUS_FORM } from 'src/app/const/initValue';
import { EmployeeService } from 'src/app/services/employee.service';
import { differenceInCalendarDays } from 'date-fns';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.scss']
})
export class EmployeeFormComponent {

  constructor(
    private fb: NonNullableFormBuilder,
    @Inject(NZ_MODAL_DATA) public data: any,
    private modal: NzModalRef<EmployeeFormComponent>,
    private employeeService: EmployeeService
  ) { }

  MSG = MSG;
  GENDERS = GENDERS;
  POSITIONS = POSITIONS;
  STATUS_FORM = STATUS_FORM;
  MODE_FORM = MODE_FORM;

  validateForm: FormGroup<{
    userCodeCtrl: FormControl<string>;
    userNameCtrl: FormControl<string>;
    positionCtrl: FormControl<string>;
    statusCtrl: FormControl<string>;
    laborContractCtrl: FormControl<string>;
    salaryCtrl: FormControl<string>;
    genderCtrl: FormControl<string>;
    dateOfBirthCtrl: FormControl<string>;
    phoneCtrl: FormControl<string>;
    addressCtrl: FormControl<string>;
    emailCtrl: FormControl<string>;
    identityCardCtrl: FormControl<string>;
    dateStartCtrl: FormControl<string>;
    dateEndCtrl: FormControl<string>;

  }> = this.fb.group({
    userCodeCtrl: [{ value: '', disabled: true }, [Validators.required]],
    userNameCtrl: [{ value: '', disabled: this.isCheckDisabled() }, [Validators.required],],
    positionCtrl: [{ value: '', disabled: this.isCheckDisabled() }, [Validators.required]],
    statusCtrl: [{ value: '', disabled: this.isCheckDisabled() }, [Validators.required]],
    laborContractCtrl: [{ value: '', disabled: this.isCheckDisabled() }, [Validators.required]],
    salaryCtrl: [{ value: '', disabled: this.isCheckDisabled() }, [Validators.required]],
    genderCtrl: [{ value: '', disabled: this.isCheckDisabled() }, [Validators.required]],
    dateOfBirthCtrl: [{ value: '', disabled: this.isCheckDisabled() }, [Validators.required]],
    phoneCtrl: [{ value: '', disabled: this.isCheckDisabled() }, [Validators.required]],
    addressCtrl: [{ value: '', disabled: this.isCheckDisabled() }, [Validators.required]],
    emailCtrl: [{ value: '', disabled: this.isCheckDisabled() }, [Validators.required]],
    identityCardCtrl: [{ value: '', disabled: this.isCheckDisabled() }, [Validators.required]],
    dateStartCtrl: [{ value: '', disabled: this.isCheckDisabled() }, [Validators.required]],
    dateEndCtrl: [{ value: '', disabled: this.isCheckDisabled() }, []]
  });

  submitForm(): void {
    console.log(this.validateForm.value.dateStartCtrl);

    if (this.validateForm.valid) {
      let data = {
        userName: this.validateForm.value.userNameCtrl,
        userCode: this.validateForm.value.userCodeCtrl,
        gender: this.validateForm.value.genderCtrl,
        dateOfBirth: this.formatDate(new Date(this.validateForm.value.dateOfBirthCtrl ? this.validateForm.value.dateOfBirthCtrl : "")),
        phone: this.validateForm.value.phoneCtrl,
        address: this.validateForm.value.addressCtrl,
        email: this.validateForm.value.emailCtrl,
        identityCard: this.validateForm.value.identityCardCtrl,
        status: this.validateForm.value.statusCtrl,
        position: this.validateForm.value.positionCtrl,
        laborContract: this.validateForm.value.laborContractCtrl,
        salary: this.validateForm.value.salaryCtrl,
        dateEnd: this.validateForm.value.dateEndCtrl ? this.formatDate(new Date(this.validateForm.value.dateEndCtrl)) : "",
        dateStart: this.formatDate(new Date(this.validateForm.value.dateStartCtrl ? this.validateForm.value.dateStartCtrl : ""))
      }

      if (this.data.mode == MODE_FORM.create) {
        this.employeeService.postData(data, (res: any) => {
          this.modal.close(true);
        })
      } else if (this.data.mode == MODE_FORM.update) {
        this.employeeService.updateData(data, this.data?.recordData?.employeeId, (res: any) => {
          this.modal.close(true);
        })
      }

    } else {
      Object.values(this.validateForm.controls).forEach(control => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    }
  }

  formatDate(date: Date): string {
    const day = date.getDate().toString().padStart(2, '0'); // Lấy ngày và thêm số 0 phía trước nếu cần
    const month = (date.getMonth() + 1).toString().padStart(2, '0'); // Lấy tháng (phải cộng thêm 1 vì index của tháng bắt đầu từ 0) và thêm số 0 phía trước nếu cần
    const year = date.getFullYear(); // Lấy năm

    return `${day}/${month}/${year}`;
  }

  ngOnInit() {
    this.updateDate();
  }

  closeFrom() {
    this.modal.close();
  }

  updateDate() {
    if (this.data?.mode == MODE_FORM.detail || this.data?.mode == MODE_FORM.update) {
      this.validateForm.controls.userCodeCtrl.setValue(this.data?.recordData?.userCode ? this.data?.recordData?.userCode : '')
      this.validateForm.controls.userNameCtrl.setValue(this.data?.recordData?.userName ? this.data?.recordData?.userName : '')
      this.validateForm.controls.positionCtrl.setValue(this.data?.recordData?.position ? this.data?.recordData?.position : '')
      this.validateForm.controls.statusCtrl.setValue(this.data?.recordData?.status ? this.data?.recordData?.status : '')
      this.validateForm.controls.laborContractCtrl.setValue(this.data?.recordData?.laborContract ? this.data?.recordData?.laborContract : '');
      this.validateForm.controls.salaryCtrl.setValue(this.data?.recordData?.salary ? this.data?.recordData?.salary : '');
      this.validateForm.controls.genderCtrl.setValue(this.data?.recordData?.gender ? this.data?.recordData?.gender : '');
      this.validateForm.controls.dateOfBirthCtrl.setValue(this.data?.recordData?.dateOfBirth ? this.data?.recordData?.dateOfBirth : '');
      this.validateForm.controls.phoneCtrl.setValue(this.data?.recordData?.phone ? this.data?.recordData?.phone : '');
      this.validateForm.controls.addressCtrl.setValue(this.data?.recordData?.address ? this.data?.recordData?.address : '')
      this.validateForm.controls.emailCtrl.setValue(this.data?.recordData?.email ? this.data?.recordData?.email : '')
      this.validateForm.controls.identityCardCtrl.setValue(this.data?.recordData?.identityCard ? this.data?.recordData?.identityCard : '')
      this.validateForm.controls.dateStartCtrl.setValue(this.data?.recordData?.dateStart ? this.formatDateToMMDDYYYY(this.data?.recordData?.dateStart) : '')
      this.validateForm.controls.dateEndCtrl.setValue(this.data?.recordData?.dateEnd ? this.formatDateToMMDDYYYY(this.data?.recordData?.dateEnd) : '')
    }
  }

  isCheckDisabled(): boolean {
    if (this.data?.mode == MODE_FORM.detail) return true
    return false;
  }

  disabledStartDate = (startValue: Date): boolean => {
    if (!startValue || !this.validateForm.value?.dateEndCtrl) {
      return false;
    }

    return differenceInCalendarDays(startValue, new Date(this.validateForm.value.dateEndCtrl)) > 0;
  }

  disabledEndDate = (endValue: Date): boolean => {
    if (!endValue || !this.validateForm.value?.dateStartCtrl) {
      return false;
    }

    return differenceInCalendarDays(new Date(this.validateForm.value.dateStartCtrl), endValue) > 0;
  }

  formatDateToMMDDYYYY(dateString: string): string {
    const parts = dateString.split('/'); // Tách chuỗi thành mảng các phần tử bằng dấu '/'

    // Kiểm tra xem mảng có đúng 3 phần tử không
    if (parts.length !== 3) {
        return dateString; // Trả về chuỗi ban đầu nếu không đúng định dạng
    }

    const [day, month, year] = parts;

    // Kết hợp lại các phần tử theo định dạng mới và trả về
    return `${month}-${day}-${year}`;
}

}