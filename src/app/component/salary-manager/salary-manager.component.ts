import { Component } from '@angular/core';
import { FormControl, FormGroup, NonNullableFormBuilder } from '@angular/forms';
import { NzModalRef, NzModalService } from 'ng-zorro-antd/modal';
import { MODE_FORM } from 'src/app/const/common';
import { EmployeeFormComponent } from '../employee-manager/employee-form/employee-form.component';
import { SalaryManagerFormComponent } from './salary-manager-form/salary-manager-form.component';
interface ItemData {
  name: string;
  age: number;
  address: string;
}


@Component({
  selector: 'app-salary-manager',
  templateUrl: './salary-manager.component.html',
  styleUrls: ['./salary-manager.component.scss']
})
export class SalaryManagerComponent {
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

  listOfData: ItemData[] = [];

  ngOnInit(): void {
    for (let i = 0; i < 100; i++) {
      this.listOfData.push({
        name: `Edward King ${i}`,
        age: 32,
        address: `London`
      });
    }
  }

  openModalCreate() {
    let data = {
      mode: MODE_FORM.create,
    }

    this.modalService.create({
      nzTitle: 'Thêm mới nhân viên',
      nzContent: SalaryManagerFormComponent,
      nzData: data,
      nzWidth: 800,
      nzWrapClassName: 'open-modal-create',
      nzFooter: null,
    });
  }

    openModalUpdate() {
      let data = {
        mode: MODE_FORM.create,
      }
  
      this.modalService.create({
        nzTitle: 'Chi tiết thông tin lương tháng',
        nzContent: SalaryManagerFormComponent,
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

}
