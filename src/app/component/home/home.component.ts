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
        width: 380,
        type: "pie"
      },
      labels: ["Team A", "Team B", "Team C"],
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
