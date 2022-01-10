import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TherapistMasterComponent } from './therapist-master.component';

describe('TherapistMasterComponent', () => {
  let component: TherapistMasterComponent;
  let fixture: ComponentFixture<TherapistMasterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TherapistMasterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TherapistMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
