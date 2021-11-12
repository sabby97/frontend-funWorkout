import { Component, OnInit } from '@angular/core';
import { WorkoutService } from 'src/app/services/workout-service';

@Component({
  selector: 'app-custom-workout',
  templateUrl: './custom-workout.component.html',
  styleUrls: ['./custom-workout.component.css']
})
export class CustomWorkoutComponent implements OnInit {

  constructor(private workoutService: WorkoutService) {
    this.targetCheckboxBooleans = [true, true, true, true, true, true, true];

   }

  ngOnInit(): void {
  }

  //
  warmUpBoolean: boolean = true;
  coolDownBoolean: boolean = true;

  selectedMinIntensity: number = 1;
  selectedMaxIntensity: number = 3;
  selectedTargetId: number;

  selectedWorkoutLength: number = 3;

  exerciseTargetNames = ["arms", "chest", "back", "legs", "core", "glutes", "cardio"];

  targetCheckboxBooleans: boolean[];

  generateCustomWorkout() {

  this.workoutService.generateCustomWorkout(this.selectedWorkoutLength, this.selectedMinIntensity, this.selectedMaxIntensity, this.targetCheckboxBooleans, this.warmUpBoolean, this.coolDownBoolean);

  }

}
