import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TherapysubcatmanagerComponent } from './therapysubcatmanager.component';

describe('TherapysubcatmanagerComponent', () => {
  let component: TherapysubcatmanagerComponent;
  let fixture: ComponentFixture<TherapysubcatmanagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TherapysubcatmanagerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TherapysubcatmanagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
