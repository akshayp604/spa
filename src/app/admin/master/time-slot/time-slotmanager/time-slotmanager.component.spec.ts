import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeSlotmanagerComponent } from './time-slotmanager.component';

describe('TimeSlotmanagerComponent', () => {
  let component: TimeSlotmanagerComponent;
  let fixture: ComponentFixture<TimeSlotmanagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimeSlotmanagerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TimeSlotmanagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
