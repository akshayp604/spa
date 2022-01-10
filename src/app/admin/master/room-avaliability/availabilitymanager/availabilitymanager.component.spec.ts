import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvailabilitymanagerComponent } from './availabilitymanager.component';

describe('AvailabilitymanagerComponent', () => {
  let component: AvailabilitymanagerComponent;
  let fixture: ComponentFixture<AvailabilitymanagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AvailabilitymanagerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AvailabilitymanagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
