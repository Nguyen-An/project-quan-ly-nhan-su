import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IconsProviderModule } from './icons-provider.module';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { LoginComponent } from './component/login/login.component';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { HomeComponent } from './component/home/home.component';
import { EmployeeManagerComponent } from './component/employee-manager/employee-manager.component';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzPaginationModule } from 'ng-zorro-antd/pagination';
import { EmployeeFormComponent } from './component/employee-manager/employee-form/employee-form.component';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { SalaryManagerComponent } from './component/salary-manager/salary-manager.component';
import { SalaryManagerFormComponent } from './component/salary-manager/salary-manager-form/salary-manager-form.component';
import { ReportAccountComponent } from './component/report/report-account/report-account.component';
import { ReportEmployeeComponent } from './component/report/report-employee/report-employee.component';
import { ReportSalaryComponent } from './component/report/report-salary/report-salary.component';
import { NgxApexchartsModule } from 'ngx-apexcharts';

registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    EmployeeManagerComponent,
    EmployeeFormComponent,
    HomeComponent,
    SalaryManagerFormComponent,
    SalaryManagerComponent,
    ReportEmployeeComponent,
    ReportAccountComponent,
    ReportSalaryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    IconsProviderModule,
    NzLayoutModule,
    NzMenuModule,
    NzModalModule,
    NzSelectModule,
    NzFormModule,
    NzButtonModule,
    NzPaginationModule,
    NzInputModule,
    NzTableModule,
    NzIconModule,
    NzDatePickerModule,
    NgxApexchartsModule,
  ],
  providers: [
    { provide: NZ_I18N, useValue: en_US }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
