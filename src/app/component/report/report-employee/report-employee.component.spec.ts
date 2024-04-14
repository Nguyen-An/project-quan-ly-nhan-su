import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportEmployeeComponent } from './report-employee.component';

describe('ReportEmployeeComponent', () => {
  let component: ReportEmployeeComponent;
  let fixture: ComponentFixture<ReportEmployeeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReportEmployeeComponent]
    });
    fixture = TestBed.createComponent(ReportEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
