import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailManagmentComponent } from './detail-managment.component';

describe('DetailManagmentComponent', () => {
  let component: DetailManagmentComponent;
  let fixture: ComponentFixture<DetailManagmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailManagmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailManagmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
