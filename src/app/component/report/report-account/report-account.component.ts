import { Component } from '@angular/core';
import { FormControl, FormGroup, NonNullableFormBuilder } from '@angular/forms';
import { NzModalRef } from 'ng-zorro-antd/modal';
import { MODE_FORM } from 'src/app/const/common';
import { POSITIONS, STATUS } from 'src/app/const/initValue';
import { Account, Employee, accountFakeData, employeeFakeData } from 'src/app/const/model';

@Component({
  selector: 'app-report-account',
  templateUrl: './report-account.component.html',
  styleUrls: ['./report-account.component.scss']
})
export class ReportAccountComponent {
  confirmModal?: NzModalRef;

  validateForm: FormGroup<{
    searchCtrl: FormControl<string>;
  }> = this.fb.group({
    searchCtrl: ['', []],
  });

  constructor(
    private fb: NonNullableFormBuilder,
  ) { }

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

  MODE_FORM = MODE_FORM;
  listOfData: Account[] = [];
  total = 0;
  currentPage = 1;
  size = 10;

  ngOnInit(): void {
    this.listOfData = accountFakeData;

    this.total = accountFakeData.length
  }

  handlePageChange(pageTarget: any) {
    console.log('pageTarget: ', pageTarget);
  }
}
