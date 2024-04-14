import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportAccountComponent } from './report-account.component';

describe('ReportAccountComponent', () => {
  let component: ReportAccountComponent;
  let fixture: ComponentFixture<ReportAccountComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReportAccountComponent]
    });
    fixture = TestBed.createComponent(ReportAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
