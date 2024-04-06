import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private apiUrl = 'https://jsonplaceholder.typicode.com/posts'; // Thay đổi địa chỉ API của bạn

  constructor(private http: HttpClient) {}

  getPosts(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  getPostCallBack(callBack?: Function) {
    this.http.get(this.apiUrl, {})
    .subscribe(
      (response) => {
        if (response) {
          if (callBack) {
            callBack(response);
          }
        }
      },
      (error) => {
        if (callBack) {
          callBack(null);
        }
      }
    );
  }
}
