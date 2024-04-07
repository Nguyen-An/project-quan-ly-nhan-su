import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalaryManagerComponent } from './salary-manager.component';

describe('SalaryManagerComponent', () => {
  let component: SalaryManagerComponent;
  let fixture: ComponentFixture<SalaryManagerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SalaryManagerComponent]
    });
    fixture = TestBed.createComponent(SalaryManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
