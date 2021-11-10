import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/User';
import { workoutPlan } from 'src/app/models/workoutPlan';
import { SignInService } from 'src/app/services/sign-in-service';
import { WorkoutService } from 'src/app/services/workout-service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-workout-plan-display',
  templateUrl: './workout-plan-display.component.html',
  styleUrls: ['./workout-plan-display.component.css']
})
export class WorkoutPlanDisplayComponent implements OnInit {

  constructor(private workoutService: WorkoutService) { 
  
  }

   // Don't forget to refactor this class.  Then delete me.

   userId: number = 1;

  ngOnInit(): void {

  }
  
  getWorkoutsByUser() {

   let workoutList = this.workoutService.getWorkoutsByUser(this.userId).subscribe()  


    console.log(workoutList);
  }
 
  
}




