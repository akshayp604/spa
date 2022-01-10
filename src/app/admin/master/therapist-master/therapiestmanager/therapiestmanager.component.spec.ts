import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TherapiestmanagerComponent } from './therapiestmanager.component';

describe('TherapiestmanagerComponent', () => {
  let component: TherapiestmanagerComponent;
  let fixture: ComponentFixture<TherapiestmanagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TherapiestmanagerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TherapiestmanagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
