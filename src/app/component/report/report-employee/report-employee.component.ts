import { Component } from '@angular/core';
import { FormControl, FormGroup, NonNullableFormBuilder } from '@angular/forms';
import { NzModalRef } from 'ng-zorro-antd/modal';
import { MODE_FORM } from 'src/app/const/common';
import { POSITIONS, STATUS } from 'src/app/const/initValue';
import { Account, Employee, accountFakeData, employeeFakeData } from 'src/app/const/model';
import { EmployeeService } from 'src/app/services/employee.service';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-report-employee',
  templateUrl: './report-employee.component.html',
  styleUrls: ['./report-employee.component.scss']
})
export class ReportEmployeeComponent {
  confirmModal?: NzModalRef;

  validateForm: FormGroup<{
    statusCtrl: FormControl<string>;
  }> = this.fb.group({
    statusCtrl: ['', []],
  });

  constructor(
    private fb: NonNullableFormBuilder,
    private employeeService: EmployeeService,
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
  listOfData: Employee[] = [];
  listOfDataAll: Employee[] = [];
  total = 0;
  currentPage = 1;
  size = 10;



  ngOnInit(): void {
    this.getData('all');
  }

  handlePageChange(pageTarget: any) {
    this.currentPage = pageTarget;
    this.listOfData = this.getPaginatedData(pageTarget, this.size);
  }

  export() {
    let dataExport: any[] = [];

    this.listOfDataAll.forEach((item, i) => {
      let dataItem = {
        'STT': i+1,
        'Tên nhân viên': item.userName,
        'Mã nhân viên': item.userCode,
        'Email': item.email,
        'Chức vụ': item.positionView,
        'Số điện thoại': item.phone,
        'Địa chỉ': item.address,
        'Trạng thái': item.statusView,
        'Ngày vào làm': item.dateStart,
        'Ngày nghỉ việc': item.dateEnd,
      }
      dataExport.push(dataItem);
    });
    
    // Tạo Worksheet
    const ws: XLSX.WorkSheet = XLSX.utils.json_to_sheet(dataExport);

    // Tạo Workbook và thêm Worksheet vào đó
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Data');

    /* save to file */
    XLSX.writeFile(wb, 'Danh sách nhân viên.xlsx');
  }

  listFiter: any[] = [];

  getData(key: any) {
    this.employeeService.getAllData((res: any) => {
      if (key == 'all') {
        this.listFiter = res.data;
      } else {
        this.listFiter =  res.data.filter((item: any) => item.status == key);
      }

      this.listOfDataAll = this.listFiter.map((employee: any) => {
        let positionValue = POSITIONS.find(position => position.key == employee.position)?.value
        employee.positionView = positionValue ? positionValue : '--';
  
        let statusValue = STATUS.find(status => status.key == employee.status)?.value
        employee.statusView = statusValue ? statusValue : '--';
  
        return employee;
      });
  
      this.total = this.listFiter.length
      
      this.listOfData = this.getPaginatedData(this.currentPage, this.size);
    });
  }

  getPaginatedData(currentPage: number, size: number): Employee[] {
    const startIndex = (currentPage - 1) * size;
    const endIndex = startIndex + size;
    return this.listOfDataAll.slice(startIndex, endIndex);
  }

  loadDataFile() {
    this.getData(this.validateForm.value.statusCtrl);
  }
}
