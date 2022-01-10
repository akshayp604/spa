import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PackagemangerComponent } from './packagemanger.component';

describe('PackagemangerComponent', () => {
  let component: PackagemangerComponent;
  let fixture: ComponentFixture<PackagemangerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PackagemangerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PackagemangerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
