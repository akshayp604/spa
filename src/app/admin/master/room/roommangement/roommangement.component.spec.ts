import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoommangementComponent } from './roommangement.component';

describe('RoommangementComponent', () => {
  let component: RoommangementComponent;
  let fixture: ComponentFixture<RoommangementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoommangementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RoommangementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
