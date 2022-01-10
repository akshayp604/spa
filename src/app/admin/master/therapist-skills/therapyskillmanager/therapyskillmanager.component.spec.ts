import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TherapyskillmanagerComponent } from './therapyskillmanager.component';

describe('TherapyskillmanagerComponent', () => {
  let component: TherapyskillmanagerComponent;
  let fixture: ComponentFixture<TherapyskillmanagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TherapyskillmanagerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TherapyskillmanagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
