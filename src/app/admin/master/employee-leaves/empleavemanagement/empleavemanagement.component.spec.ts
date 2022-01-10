import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpleavemanagementComponent } from './empleavemanagement.component';

describe('EmpleavemanagementComponent', () => {
  let component: EmpleavemanagementComponent;
  let fixture: ComponentFixture<EmpleavemanagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmpleavemanagementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpleavemanagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
