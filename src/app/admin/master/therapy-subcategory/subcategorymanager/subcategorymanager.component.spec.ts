import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubcategorymanagerComponent } from './subcategorymanager.component';

describe('SubcategorymanagerComponent', () => {
  let component: SubcategorymanagerComponent;
  let fixture: ComponentFixture<SubcategorymanagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubcategorymanagerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubcategorymanagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
