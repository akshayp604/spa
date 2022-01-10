import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TherapyCategoryComponent } from './therapy-category.component';

describe('TherapyCategoryComponent', () => {
  let component: TherapyCategoryComponent;
  let fixture: ComponentFixture<TherapyCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TherapyCategoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TherapyCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
