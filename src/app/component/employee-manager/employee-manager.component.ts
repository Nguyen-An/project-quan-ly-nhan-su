import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NonNullableFormBuilder, Validators } from '@angular/forms';
import { NzModalRef, NzModalService } from 'ng-zorro-antd/modal';
import { EmployeeFormComponent } from './employee-form/employee-form.component';
import { MODE_FORM } from 'src/app/const/common';
import { Employee, employeeFakeData } from 'src/app/const/model';
import { POSITIONS, STATUS } from 'src/app/const/initValue';
import { EmployeeService } from 'src/app/services/employee.service';
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
    private employeeService: EmployeeService,
    
  ) { }

  submitForm(): void {
    this.keywords = this.validateForm.value.searchCtrl;
    this.getData();
  }

  MODE_FORM = MODE_FORM;
  listOfData: Employee[] = [];
  listOfDataAll: Employee[] = [];
  total = 0;
  currentPage = 1;
  size = 10;
  keywords: any = '';

  ngOnInit(): void {
    this.getData()
  }

  getData() {
    this.employeeService.getAllData((res: any) => {
      this.listOfDataAll = res.data.map((employee: any) => {
        let positionValue = POSITIONS.find(position => position.key == employee.position)?.value
        employee.positionView = positionValue ? positionValue : '--';
  
        let statusValue = STATUS.find(status => status.key == employee.status)?.value
        employee.statusView = statusValue ? statusValue : '--';
  
        return employee;
      });
  
      this.total = res.data.length
      
      this.listOfData = this.getPaginatedData(this.currentPage, this.size);
    }, this.keywords);
  }

  getPaginatedData(currentPage: number, size: number): Employee[] {
    const startIndex = (currentPage - 1) * size;
    const endIndex = startIndex + size;
    return this.listOfDataAll.slice(startIndex, endIndex);
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

    const modalRef = this.modalService.create({
      nzTitle:  data.title,
      nzContent: EmployeeFormComponent,
      nzData: data,
      nzWidth: 800,
      nzWrapClassName: 'open-modal-create',
      nzFooter: null,
    });

    modalRef.afterClose.subscribe((result: any) => {
      if (result) {
        this.getData();
      }
    });
    
  }

  showConfirm(data: any): void {
    this.confirmModal = this.modalService.confirm({
      nzTitle: 'Bạn có chắc chắn muốn xóa bản ghi này không?',
      nzOnOk: () =>
        this.employeeService.deleteData(data?.employeeId, (data: any) => {
          this.getData();
        })
    });
  }

  handlePageChange(pageTarget: any) {
    this.currentPage = pageTarget;
    this.listOfData = this.getPaginatedData(pageTarget, this.size);
  }
}
