import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TherapySubcategoryComponent } from './therapy-subcategory.component';

describe('TherapySubcategoryComponent', () => {
  let component: TherapySubcategoryComponent;
  let fixture: ComponentFixture<TherapySubcategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TherapySubcategoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TherapySubcategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
