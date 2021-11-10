import { Component, OnInit } from '@angular/core';
import { GenerateWorkoutService } from 'src/app/services/generate-workout.service';

@Component({
  selector: 'app-custom-workout',
  templateUrl: './custom-workout.component.html',
  styleUrls: ['./custom-workout.component.css']
})
export class CustomWorkoutComponent implements OnInit {

  constructor(private generateWorkoutService: GenerateWorkoutService) { }

  ngOnInit(): void {
  }

  selectedIntensity: number = 1;

  generateCustomWorkout() {

    this.generateWorkoutService.generateCustomWorkout(this.selectedIntensity);

  }

}
