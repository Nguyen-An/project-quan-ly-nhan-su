import { Component, ViewChild } from '@angular/core';
import {
  ApexNonAxisChartSeries,
  ApexResponsive,
  ApexChart,
  ChartType
} from "ngx-apexcharts";
import { ChartComponent } from 'ngx-apexcharts';
import { STATUS } from 'src/app/const/initValue';
import { Employee } from 'src/app/const/model';
import { EmployeeService } from 'src/app/services/employee.service';

export type ChartOptions = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  responsive: ApexResponsive[];
  labels: any;
};

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  @ViewChild("chart") chart!: ChartComponent;
  chartOptions: ChartOptions;

  totalEmployee: number = 0;
  totalEmployeeWorking: number = 0;
  totalEmployeeQuit: number = 0;
  totalEmployeeQuitTemporarilyLaidOff: number = 0;
    
  constructor(
    private employeeService: EmployeeService,
  ) {
    this.chartOptions = {
      series: [99, 99, 99],
      chart: {
        width: 500,
        type: "pie"
      },
      labels: ["Tổng số nhân viên đang làm việc", "Tổng số nhân viên đang tạm nghỉ việc B", "Tổng số nhân viên đang đã nghỉ việc"],
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200
            },
            legend: {
              position: "bottom"
            }
          }
        }
      ]
    };

    this.getData()
  }
  
  listOfDataAll: Employee[] = [];

  getData() {
    this.employeeService.getAllData((res: any) => {
      this.listOfDataAll = res.data;
      this.totalEmployee = this.listOfDataAll.length;
      this.totalEmployeeWorking = this.listOfDataAll.filter(item => item.status === 'working').length;
      this.totalEmployeeQuitTemporarilyLaidOff = this.listOfDataAll.filter(item => item.status === 'onLeave').length;
      this.totalEmployeeQuit = this.listOfDataAll.filter(item => item.status === 'resigned').length;
      this.chartOptions.series = [this.totalEmployeeWorking, this.totalEmployeeQuitTemporarilyLaidOff, this.totalEmployeeQuit]
    });
  }
}
