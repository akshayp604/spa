import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TherepistComponent } from './therepist.component';

describe('TherepistComponent', () => {
  let component: TherepistComponent;
  let fixture: ComponentFixture<TherepistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TherepistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TherepistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
