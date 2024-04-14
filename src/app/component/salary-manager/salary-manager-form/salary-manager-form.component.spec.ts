import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalaryManagerFormComponent } from './salary-manager-form.component';

describe('SalaryManagerFormComponent', () => {
  let component: SalaryManagerFormComponent;
  let fixture: ComponentFixture<SalaryManagerFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SalaryManagerFormComponent]
    });
    fixture = TestBed.createComponent(SalaryManagerFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
