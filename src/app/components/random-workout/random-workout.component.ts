import { Component, OnInit } from '@angular/core';
import { GenerateWorkoutService } from 'src/app/services/generate-workout.service';

@Component({
  selector: 'app-random-workout',
  templateUrl: './random-workout.component.html',
  styleUrls: ['./random-workout.component.css']
})
export class RandomWorkoutComponent implements OnInit {

  constructor(private generateWorkoutService: GenerateWorkoutService) { }

  ngOnInit(): void {
  }

  generateRandomWorkout() {

    this.generateWorkoutService.generateRandomWorkout();

  }

}
