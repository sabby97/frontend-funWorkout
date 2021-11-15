import { Component, OnInit } from '@angular/core';
import { WorkoutService } from 'src/app/services/workout-service';

@Component({
  selector: 'app-user-buttons',
  templateUrl: './user-buttons.component.html',
  styleUrls: ['./user-buttons.component.css']
})
export class UserButtonsComponent implements OnInit {

  constructor(private workoutService: WorkoutService) { }

  ngOnInit(): void {
  }

  deleteWorkoutBtn(){
    this.workoutService.deleteWorkout();
  }
  saveWorkoutBtn(){
    this.workoutService.saveWorkout();
  }

}
