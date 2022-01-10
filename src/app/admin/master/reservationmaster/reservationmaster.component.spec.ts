import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservationmasterComponent } from './reservationmaster.component';

describe('ReservationmasterComponent', () => {
  let component: ReservationmasterComponent;
  let fixture: ComponentFixture<ReservationmasterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReservationmasterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReservationmasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
