import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup, NonNullableFormBuilder, Validators } from '@angular/forms';
import { NZ_MODAL_DATA, NzModalRef } from 'ng-zorro-antd/modal';
import { MSG } from 'src/app/const/common';
import { GENDERS, POSITIONS, STATUS } from 'src/app/const/initValue';

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
  ) {}

  MSG = MSG;
  GENDERS = GENDERS;
  POSITIONS = POSITIONS;
  STATUS = STATUS;

  validateForm: FormGroup<{
    userNameCtrl: FormControl<string>;
    userCodeCtrl: FormControl<string>;
    positionCtrl: FormControl<string>;
    statusCtrl: FormControl<string>;
    laborContractCtrl: FormControl<string>;
    salaryCtrl: FormControl<string>;
    salaryCodeCtrl: FormControl<string>;
    genderCtrl: FormControl<string>;
    dateOfBirth: FormControl<string>;
    phoneCtrl: FormControl<string>;
    addressCtrl: FormControl<string>;
    emailCtrl: FormControl<string>;
    identityCardCtrl: FormControl<string>;
    dateStart: FormControl<string>;
    dateEnd: FormControl<string>;

  }> = this.fb.group({
    userNameCtrl: ['', [Validators.required]],
    userCodeCtrl: ['', [Validators.required]],
    positionCtrl: ['', [Validators.required]],
    statusCtrl: ['', [Validators.required]],
    laborContractCtrl: ['', [Validators.required]],
    salaryCtrl: ['', [Validators.required]],
    salaryCodeCtrl: ['', [Validators.required]],
    genderCtrl: ['', [Validators.required]],
    dateOfBirth: ['', [Validators.required]],
    phoneCtrl: ['', [Validators.required]],
    addressCtrl: ['', [Validators.required]],
    emailCtrl: ['', [Validators.required]],
    identityCardCtrl: ['', [Validators.required]],
    dateStart: ['', [Validators.required]],
    dateEnd: ['', []]
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
