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
    console.log("deleting a workout");
  }
  saveWorkoutBtn(){
    this.workoutService.saveWorkout();
    console.log("saving a workout");
  }

}
