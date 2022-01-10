import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomAvaliabilityComponent } from './room-avaliability.component';

describe('RoomAvaliabilityComponent', () => {
  let component: RoomAvaliabilityComponent;
  let fixture: ComponentFixture<RoomAvaliabilityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoomAvaliabilityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RoomAvaliabilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
