import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PackagemanagerComponent } from './packagemanager.component';

describe('PackagemanagerComponent', () => {
  let component: PackagemanagerComponent;
  let fixture: ComponentFixture<PackagemanagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PackagemanagerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PackagemanagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
