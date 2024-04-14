import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup, NonNullableFormBuilder, Validators } from '@angular/forms';
import { NZ_MODAL_DATA, NzModalRef } from 'ng-zorro-antd/modal';
import { MODE_FORM, MSG } from 'src/app/const/common';
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
  ) { }

  MSG = MSG;
  GENDERS = GENDERS;
  POSITIONS = POSITIONS;
  STATUS = STATUS;
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
    userCodeCtrl: [{value: '', disabled: this.isCheckDisabled()}, [Validators.required]],
    userNameCtrl: [{value: '', disabled: this.isCheckDisabled()}, [Validators.required], ],
    positionCtrl: [{value: '', disabled: this.isCheckDisabled()}, [Validators.required]],
    statusCtrl: [{value: '', disabled: this.isCheckDisabled()}, [Validators.required]],
    laborContractCtrl: [{value: '', disabled: this.isCheckDisabled()}, [Validators.required]],
    salaryCtrl: [{value: '', disabled: this.isCheckDisabled()}, [Validators.required]],
    genderCtrl: [{value: '', disabled: this.isCheckDisabled()}, [Validators.required]],
    dateOfBirthCtrl: [{value: '', disabled: this.isCheckDisabled()}, [Validators.required]],
    phoneCtrl: [{value: '', disabled: this.isCheckDisabled()}, [Validators.required]],
    addressCtrl: [{value: '', disabled: this.isCheckDisabled()}, [Validators.required]],
    emailCtrl: [{value: '', disabled: this.isCheckDisabled()}, [Validators.required]],
    identityCardCtrl: [{value: '', disabled: this.isCheckDisabled()}, [Validators.required]],
    dateStartCtrl: [{value: '', disabled: this.isCheckDisabled()}, [Validators.required]],
    dateEndCtrl: [{value: '', disabled: this.isCheckDisabled()}, []]
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

  ngOnInit() {
    this.updateDate();
  }

  closeFrom() {
    this.modal.close();
  }

  updateDate() {
    if (this.data?.mode == MODE_FORM.detail || this.data?.mode == MODE_FORM.update) {
      this.validateForm.controls.userCodeCtrl.setValue(this.data?.recordData?.userCode)
      this.validateForm.controls.userNameCtrl.setValue(this.data?.recordData?.userName)
      this.validateForm.controls.positionCtrl.setValue(this.data?.recordData?.position)
      this.validateForm.controls.statusCtrl.setValue(this.data?.recordData?.status)
      this.validateForm.controls.laborContractCtrl.setValue(this.data?.recordData?.laborContract)
      this.validateForm.controls.salaryCtrl.setValue(this.data?.recordData?.salary)
      this.validateForm.controls.genderCtrl.setValue(this.data?.recordData?.gender)
      this.validateForm.controls.dateOfBirthCtrl.setValue(this.data?.recordData?.dateOfBirth)
      this.validateForm.controls.phoneCtrl.setValue(this.data?.recordData?.phone)
      this.validateForm.controls.addressCtrl.setValue(this.data?.recordData?.address)
      this.validateForm.controls.emailCtrl.setValue(this.data?.recordData?.email)
      this.validateForm.controls.identityCardCtrl.setValue(this.data?.recordData?.identityCard)
      this.validateForm.controls.dateStartCtrl.setValue(this.data?.recordData?.dateStart)
      this.validateForm.controls.dateEndCtrl.setValue(this.data?.recordData?.dateEnd)
    }
  }

  isCheckDisabled():boolean {
    if (this.data?.mode == MODE_FORM.detail) return true
    return false;
  }

}
