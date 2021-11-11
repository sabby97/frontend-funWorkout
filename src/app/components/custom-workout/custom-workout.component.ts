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

  selectedIntensity: number = 1;
  selectedTargetId: number;

  exerciseTargetNames = ["arms", "chest", "back", "legs", "core", "glutes", "cardio"];

  targetCheckboxBooleans: boolean[];

  generateCustomWorkout() {

    let targetBinaryCode;

    console.log(this.targetCheckboxBooleans);
    

    this.workoutService.generateCustomWorkout(this.selectedIntensity);

  }

}
