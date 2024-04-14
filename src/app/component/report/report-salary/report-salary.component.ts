import { Component } from '@angular/core';
import { FormControl, FormGroup, NonNullableFormBuilder } from '@angular/forms';
import { NzModalRef } from 'ng-zorro-antd/modal';
import { MODE_FORM } from 'src/app/const/common';
import { POSITIONS, SALARY, STATUS } from 'src/app/const/initValue';
import { Account, Employee, accountFakeData, employeeFakeData } from 'src/app/const/model';

@Component({
  selector: 'app-report-salary',
  templateUrl: './report-salary.component.html',
  styleUrls: ['./report-salary.component.scss']
})
export class ReportSalaryComponent {
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
  STATUS = STATUS;
  SALARY = SALARY;
  listOfData: Employee[] = [];
  total = 0;
  currentPage = 1;
  size = 10;

  ngOnInit(): void {
    this.listOfData = employeeFakeData.map(employee => {
      let positionValue = POSITIONS.find(position => position.key == employee.position)?.value
      employee.positionView = positionValue ? positionValue : '--';

      let statusValue = STATUS.find(status => status.key == employee.status)?.value
      employee.statusView = statusValue ? statusValue : '--';

      return employee;
    });

    this.total = employeeFakeData.length
  }

  handlePageChange(pageTarget: any) {
    console.log('pageTarget: ', pageTarget);
  }

  export() {
    
  }
}
