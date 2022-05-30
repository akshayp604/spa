import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GiftcertificateComponent } from './giftcertificate.component';

describe('GiftcertificateComponent', () => {
  let component: GiftcertificateComponent;
  let fixture: ComponentFixture<GiftcertificateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GiftcertificateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GiftcertificateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
