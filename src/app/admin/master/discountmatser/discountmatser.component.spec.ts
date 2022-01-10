import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscountmatserComponent } from './discountmatser.component';

describe('DiscountmatserComponent', () => {
  let component: DiscountmatserComponent;
  let fixture: ComponentFixture<DiscountmatserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiscountmatserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DiscountmatserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
