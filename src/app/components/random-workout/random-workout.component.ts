import { Component, OnInit } from '@angular/core';
import { WorkoutService } from 'src/app/services/workout-service';

@Component({
  selector: 'app-random-workout',
  templateUrl: './random-workout.component.html',
  styleUrls: ['./random-workout.component.css']
})
export class RandomWorkoutComponent implements OnInit {

  constructor(private workoutService: WorkoutService) { }

  ngOnInit(): void {
  }

  generateRandomWorkout() {

    this.workoutService.generateRandomWorkout();

  }

}
