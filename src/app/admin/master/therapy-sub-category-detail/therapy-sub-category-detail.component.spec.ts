import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TherapySubCategoryDetailComponent } from './therapy-sub-category-detail.component';

describe('TherapySubCategoryDetailComponent', () => {
  let component: TherapySubCategoryDetailComponent;
  let fixture: ComponentFixture<TherapySubCategoryDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TherapySubCategoryDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TherapySubCategoryDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
