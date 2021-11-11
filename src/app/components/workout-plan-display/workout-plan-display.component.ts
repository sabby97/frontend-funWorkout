import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/User';
import { workoutPlan } from 'src/app/models/workoutPlan';
import { SignInService } from 'src/app/services/sign-in-service';
import { WorkoutService } from 'src/app/services/workout-service';
import { Observable } from 'rxjs';
import { FocusedMVP } from 'src/app/models/focusedMVP';

@Component({
  selector: 'app-workout-plan-display',
  templateUrl: './workout-plan-display.component.html',
  styleUrls: ['./workout-plan-display.component.css']
})
export class WorkoutPlanDisplayComponent implements OnInit {

  constructor(private workoutService: WorkoutService) { 
    this.workoutList = workoutService.workoutList;
    this.subscribeWorkoutList = workoutService.notifyOfWorkoutList.subscribe((value) => { 
      this.workoutList = value; 
    });

  }

   subscribeWorkoutList;

   workoutList: FocusedMVP[];
   

   userId: number = 1;
   
  

  ngOnInit(): void {
    this.getWorkoutsByUser();
  }


  
   getWorkoutsByUser() {
    
     this.workoutService.getWorkoutsByUser(1);
     console.log(this.workoutList);
     console.log(typeof(this.workoutList));


  //  this.workoutService.getWorkoutsByUser(this.userId).subscribe(
  //    (response) => {
  //      console.log(response)
  //    }
  //  )  

  }
 
  
}




