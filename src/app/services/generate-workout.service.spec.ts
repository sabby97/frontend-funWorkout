import { TestBed } from '@angular/core/testing';

import { GenerateWorkoutService } from './generate-workout.service';

describe('GenerateWorkoutService', () => {
  let service: GenerateWorkoutService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GenerateWorkoutService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
