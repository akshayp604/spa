import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TherapistAvailabilityComponent } from './therapist-availability.component';

describe('TherapistAvailabilityComponent', () => {
  let component: TherapistAvailabilityComponent;
  let fixture: ComponentFixture<TherapistAvailabilityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TherapistAvailabilityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TherapistAvailabilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
