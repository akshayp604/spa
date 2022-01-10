import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentmodemanagerComponent } from './paymentmodemanager.component';

describe('PaymentmodemanagerComponent', () => {
  let component: PaymentmodemanagerComponent;
  let fixture: ComponentFixture<PaymentmodemanagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaymentmodemanagerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentmodemanagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
