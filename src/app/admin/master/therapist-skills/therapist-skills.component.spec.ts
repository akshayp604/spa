import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TherapistSkillsComponent } from './therapist-skills.component';

describe('TherapistSkillsComponent', () => {
  let component: TherapistSkillsComponent;
  let fixture: ComponentFixture<TherapistSkillsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TherapistSkillsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TherapistSkillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
