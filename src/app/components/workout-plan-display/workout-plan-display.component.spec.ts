import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkoutPlanDisplayComponent } from './workout-plan-display.component';

describe('WorkoutPlanDisplayComponent', () => {
  let component: WorkoutPlanDisplayComponent;
  let fixture: ComponentFixture<WorkoutPlanDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkoutPlanDisplayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkoutPlanDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
