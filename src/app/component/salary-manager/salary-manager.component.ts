import { Component } from '@angular/core';
import { FormControl, FormGroup, NonNullableFormBuilder } from '@angular/forms';
import { NzModalRef, NzModalService } from 'ng-zorro-antd/modal';
import { MODE_FORM, formatCurrency } from 'src/app/const/common';
import { EmployeeFormComponent } from '../employee-manager/employee-form/employee-form.component';
import { SalaryManagerFormComponent } from './salary-manager-form/salary-manager-form.component';
import { SalartEmployee, salartEmployee } from 'src/app/const/model';
import { POSITIONS, STATUS } from 'src/app/const/initValue';
import * as XLSX from 'xlsx';

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

  listOfData: SalartEmployee[] = [];
  listOfDataAll: SalartEmployee[] = [];
  total = 0;
  currentPage = 1;
  size = 10;

  ngOnInit(): void {
    this.getData()
  }

  getData() {
    this.listOfDataAll = salartEmployee.map((employee: any) => {
      let positionValue = POSITIONS.find(position => position.key == employee.position)?.value
      employee.positionView = positionValue ? positionValue : '--';

      let statusValue = STATUS.find(status => status.key == employee.status)?.value
      employee.statusView = statusValue ? statusValue : '--';

      employee.actuallyReceived = Number(employee.salary) + Number(employee.allowance) + Number(employee.bonus) - Number(employee.advance)
      return employee;
    });

    this.total = salartEmployee.length

    this.listOfData = this.getPaginatedData(this.currentPage, this.size);
  }

  getPaginatedData(currentPage: number, size: number): SalartEmployee[] {
    const startIndex = (currentPage - 1) * size;
    const endIndex = startIndex + size;
    return this.listOfDataAll.slice(startIndex, endIndex);
  }

  handlePageChange(pageTarget: any) {
    this.currentPage = pageTarget;
    this.listOfData = this.getPaginatedData(pageTarget, this.size);
  }

  formatCurrency(value: string) {
    return formatCurrency(value);
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
      mode: MODE_FORM.detail,
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

  export() {
    let dataExport: any[] = [];

    this.listOfDataAll.forEach((item, i) => {
      let dataItem = {
        'STT': i+1,
        'Mã nhân viên': item.userCode + (i+1),
        'Tên nhân viên': item.userName,
        'Mức lương':formatCurrency(item.salary),
        'Ngày công': item.positionView,
        'Thưởng': formatCurrency(item.bonus),
        'Phạt': formatCurrency(item.bonus),
        'Tạm ứng': formatCurrency(item.bonus),
        'Thực nhận': formatCurrency(item.bonus),
        'Tháng': this.getCurrentMonth(),
      }
      dataExport.push(dataItem);
    });
    
    // Tạo Worksheet
    const ws: XLSX.WorkSheet = XLSX.utils.json_to_sheet(dataExport);

    // Tạo Workbook và thêm Worksheet vào đó
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Data');

    /* save to file */
    XLSX.writeFile(wb, 'Danh sách quản lý lương theo tháng.xlsx');
  }

  getCurrentMonth(): number {
    const currentDate = new Date();
    const currentMonth = currentDate.getMonth() + 1; // Tháng bắt đầu từ 0 nên cần cộng thêm 1
    return currentMonth;
}

}
