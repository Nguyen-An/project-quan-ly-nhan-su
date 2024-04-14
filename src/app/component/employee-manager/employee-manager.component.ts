import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NonNullableFormBuilder, Validators } from '@angular/forms';
import { NzModalRef, NzModalService } from 'ng-zorro-antd/modal';
import { EmployeeFormComponent } from './employee-form/employee-form.component';
import { MODE_FORM } from 'src/app/const/common';
import { Employee, employeeFakeData } from 'src/app/const/model';
import { POSITIONS, STATUS } from 'src/app/const/initValue';
@Component({
  selector: 'app-employee-manager',
  templateUrl: './employee-manager.component.html',
  styleUrls: ['./employee-manager.component.scss']
})
export class EmployeeManagerComponent {
  confirmModal?: NzModalRef;

  validateForm: FormGroup<{
    searchCtrl: FormControl<string>;
  }> = this.fb.group({
    searchCtrl: ['', []],
  });

  constructor(
    private fb: NonNullableFormBuilder,
    private modalService: NzModalService,
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

  openModal(mode: string, recordData?: Employee) {
    let data = {
      mode: mode,
      title: '',
      recordData: recordData
    }

    if (mode == MODE_FORM.create) {
      data.title = 'Thêm mới nhân viên';
    } else if (mode == MODE_FORM.update) {
      data.title = 'Cập nhật nhân viên';
    } else if (mode == MODE_FORM.detail) {
      data.title = 'Chi tiết nhân viên';
    }

    this.modalService.create({
      nzTitle:  data.title,
      nzContent: EmployeeFormComponent,
      nzData: data,
      nzWidth: 800,
      nzWrapClassName: 'open-modal-create',
      nzFooter: null,
    });
  }

  showConfirm(): void {
    this.confirmModal = this.modalService.confirm({
      nzTitle: 'Bạn có chắc chắn muốn xóa bản ghi này không?',
      // nzContent: 'When clicked the OK button, this dialog will be closed after 1 second',
      nzOnOk: () =>
        new Promise((resolve, reject) => {
          setTimeout(Math.random() > 0.5 ? resolve : reject, 1000);
        }).catch(() => console.log('Oops errors!'))
    });
  }

  handlePageChange(pageTarget: any) {
    console.log('pageTarget: ', pageTarget);
  }
}
