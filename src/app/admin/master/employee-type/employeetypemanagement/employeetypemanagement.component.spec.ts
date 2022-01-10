import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeetypemanagementComponent } from './employeetypemanagement.component';

describe('EmployeetypemanagementComponent', () => {
  let component: EmployeetypemanagementComponent;
  let fixture: ComponentFixture<EmployeetypemanagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeetypemanagementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeetypemanagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
