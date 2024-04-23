import { Component } from '@angular/core';
import { FormControl, FormGroup, NonNullableFormBuilder } from '@angular/forms';
import { NzModalRef } from 'ng-zorro-antd/modal';
import { MODE_FORM, formatCurrency } from 'src/app/const/common';
import { POSITIONS, SALARY, STATUS } from 'src/app/const/initValue';
import { Account, Employee, SalartEmployee, accountFakeData, employeeFakeData, salartEmployee } from 'src/app/const/model';
import * as XLSX from 'xlsx';

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
  listOfData: SalartEmployee[] = [];
  listFiter: any[] = [];
  total = 0;
  currentPage = 1;
  size = 10;

  ngOnInit(): void {
    this.getData('all')
  }

  getData(key: any) {
    console.log('key', key);
    
    if (key == 'all') {
      this.listFiter = salartEmployee;
    } else if (key == '0-6') {
      this.listFiter = salartEmployee.filter((item: any) => Number(item.salary) < 6000000);
    } else if (key == '6-9') {
      this.listFiter = salartEmployee.filter((item: any) => (Number(item.salary) >= 6000000 && Number(item.salary) <= 9000000));
    } else if (key == '9-m') {
      this.listFiter = salartEmployee.filter((item: any) => Number(item.salary) > 9000000);
    }

    this.listOfData = this.listFiter.map((employee: any) => {
      let positionValue = POSITIONS.find(position => position.key == employee.position)?.value
      employee.positionView = positionValue ? positionValue : '--';

      let statusValue = STATUS.find(status => status.key == employee.status)?.value
      employee.statusView = statusValue ? statusValue : '--';

      return employee;
    });

    this.total = this.listFiter.length

    this.listOfData = this.getPaginatedData(this.currentPage, this.size);
  }

  getPaginatedData(currentPage: number, size: number): SalartEmployee[] {
    const startIndex = (currentPage - 1) * size;
    const endIndex = startIndex + size;
    return this.listFiter.slice(startIndex, endIndex);
  }

  handlePageChange(pageTarget: any) {
    this.currentPage = pageTarget;
    this.listOfData = this.getPaginatedData(this.currentPage, this.size);
  }

  formatCurrency(value: string) {
    return formatCurrency(value);
  }

  loadDataFile() {
    this.getData(this.validateForm.value.searchCtrl);
  }

  export() {
    let dataExport: any[] = [];

    this.listFiter.forEach((item, i) => {
      let dataItem = {
        'STT': i+1,
        'Tên nhân viên': item.userName,
        'Mã nhân viên': item.userCode + (i+1),
        'Email': item.email,
        'Chức vụ': item.positionView,
        'Số điện thoại': item.phone,
        'Địa chỉ': item.address,
        'Trạng thái': item.statusView,
        'Mức lương': formatCurrency(item.salary),
      }
      dataExport.push(dataItem);
    });
    
    // Tạo Worksheet
    const ws: XLSX.WorkSheet = XLSX.utils.json_to_sheet(dataExport);

    // Tạo Workbook và thêm Worksheet vào đó
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Data');

    /* save to file */
    XLSX.writeFile(wb, 'Danh sách lương nhân viên theo mức lương.xlsx');
  }
}
