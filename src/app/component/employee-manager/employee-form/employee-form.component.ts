import { Component } from '@angular/core';
import { FormControl, FormGroup, NonNullableFormBuilder, Validators } from '@angular/forms';
import { MSG } from 'src/app/const/common';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.scss']
})
export class EmployeeFormComponent {

  MSG = MSG;

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
  }> = this.fb.group({
    userNameCtrl: ['', [Validators.required]],
    userCodeCtrl: ['', [Validators.required]],
    positionCtrl: ['0', [Validators.required]],
    statusCtrl: ['', [Validators.required]],
    laborContractCtrl: ['', [Validators.required]],
    salaryCtrl: ['', [Validators.required]],
    salaryCodeCtrl: ['', [Validators.required]],
    genderCtrl: ['0', [Validators.required]],
    dateOfBirth: ['', [Validators.required]],
    phoneCtrl: ['', [Validators.required]],
    addressCtrl: ['', [Validators.required]],
    emailCtrl: ['', [Validators.required]],
    identityCardCtrl: ['', [Validators.required]]
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

  constructor(private fb: NonNullableFormBuilder) {}
}
