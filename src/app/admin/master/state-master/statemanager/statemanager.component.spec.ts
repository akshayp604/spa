import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatemanagerComponent } from './statemanager.component';

describe('StatemanagerComponent', () => {
  let component: StatemanagerComponent;
  let fixture: ComponentFixture<StatemanagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StatemanagerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StatemanagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
