import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatisticsReportsManagerComponent } from './statistics-reports-manager.component';

describe('StatisticsReportsManagerComponent', () => {
  let component: StatisticsReportsManagerComponent;
  let fixture: ComponentFixture<StatisticsReportsManagerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StatisticsReportsManagerComponent]
    });
    fixture = TestBed.createComponent(StatisticsReportsManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
