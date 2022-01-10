import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsentiveMasterComponent } from './insentive-master.component';

describe('InsentiveMasterComponent', () => {
  let component: InsentiveMasterComponent;
  let fixture: ComponentFixture<InsentiveMasterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InsentiveMasterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InsentiveMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
