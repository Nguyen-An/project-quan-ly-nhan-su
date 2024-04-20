import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd/message';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(
    private http: HttpClient,
    private message: NzMessageService
  ) { }


  getAllData(callback?: any) {
    const url = 'http://localhost:3333/api/job-service/employee';

    this.http.get(url).subscribe(
      (response) => {
        callback(response);
      },
      (err) => {
        this.message.warning('Không thể kết nối dến server');
      }
    )

  }

  postData(data: any, callback?: any) {
    const url = 'http://localhost:3333/api/job-service/employee';
  
    this.http.post(url, data).subscribe(
      (response) => {
        // Xử lý kết quả ở đây
        this.message.success('Thêm mới nhân viên thành công');
        callback(response)
      },
      (error) => {
        this.message.warning('Đã có lỗi xảy ra');
      }
    );
  }

}