import { Component, ViewChild } from '@angular/core';
import {
  ApexNonAxisChartSeries,
  ApexResponsive,
  ApexChart,
  ChartType
} from "ngx-apexcharts";
import { ChartComponent } from 'ngx-apexcharts';

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

  constructor() {
    this.chartOptions = {
      series: [44, 55, 13],
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
  }
}
