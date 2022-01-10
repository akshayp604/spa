import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpaManegmentComponent } from './spa-manegment.component';

describe('SpaManegmentComponent', () => {
  let component: SpaManegmentComponent;
  let fixture: ComponentFixture<SpaManegmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpaManegmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpaManegmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
