import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsentivManagerComponent } from './insentiv-manager.component';

describe('InsentivManagerComponent', () => {
  let component: InsentivManagerComponent;
  let fixture: ComponentFixture<InsentivManagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InsentivManagerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InsentivManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
