import { Component, OnInit } from '@angular/core';
import { WorkoutService } from 'src/app/services/workout-service';

@Component({
  selector: 'app-custom-workout',
  templateUrl: './custom-workout.component.html',
  styleUrls: ['./custom-workout.component.css']
})
export class CustomWorkoutComponent implements OnInit {

  constructor(private workoutService: WorkoutService) { }

  ngOnInit(): void {
  }

  selectedIntensity: number = 1;

  generateCustomWorkout() {

    this.workoutService.generateCustomWorkout(this.selectedIntensity);

  }

}
