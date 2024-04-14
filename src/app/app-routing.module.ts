import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { EmployeeManagerComponent } from './component/employee-manager/employee-manager.component';
import { SalaryManagerComponent } from './component/salary-manager/salary-manager.component';
import { ReportAccountComponent } from './component/report/report-account/report-account.component';
import { ReportEmployeeComponent } from './component/report/report-employee/report-employee.component';
import { ReportSalaryComponent } from './component/report/report-salary/report-salary.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'employee-manager', component: EmployeeManagerComponent },
  { path: 'salary-manager', component: SalaryManagerComponent },
  { path: 'report/account', component: ReportAccountComponent },
  { path: 'report/employee', component: ReportEmployeeComponent },
  { path: 'report/salary', component: ReportSalaryComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
