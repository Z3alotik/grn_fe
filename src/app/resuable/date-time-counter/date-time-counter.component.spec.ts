import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DateTimeCounterComponent } from './date-time-counter.component';

describe('DateTimeCounterComponent', () => {
  let component: DateTimeCounterComponent;
  let fixture: ComponentFixture<DateTimeCounterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DateTimeCounterComponent]
    });
    fixture = TestBed.createComponent(DateTimeCounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
