import { Component, OnInit } from '@angular/core';
import { Observable, filter, fromEvent, interval, map, mapTo, observable, of, tap } from 'rxjs';
import { DataService } from '../data.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {
  posts: any[] = [];
  
  constructor(private dataService: DataService) { }
  
  ngOnInit() {
    // this.dataService.getPostCallBack((res: any) => {
    //   console.log("res", res);
    // })

    this.dataService.getPosts().subscribe(
      (data) => {
        this.posts = data;
      },
      (error) => {
        console.error('Error fetching posts:', error);
      }
    );
  }

}
