import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatusmanagerComponent } from './statusmanager.component';

describe('StatusmanagerComponent', () => {
  let component: StatusmanagerComponent;
  let fixture: ComponentFixture<StatusmanagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StatusmanagerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StatusmanagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
