import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/User';
import { SignInService } from 'src/app/services/sign-in-service';
import { WorkoutService } from 'src/app/services/workout-service';
import { Observable } from 'rxjs';
import { FocusedMVP } from 'src/app/models/focusedMVP';
import { WorkoutPlan } from 'src/app/models/workoutPlan';

@Component({
  selector: 'app-workout-plan-display',
  templateUrl: './workout-plan-display.component.html',
  styleUrls: ['./workout-plan-display.component.css']
})
export class WorkoutPlanDisplayComponent implements OnInit {

  constructor(private workoutService: WorkoutService) { 

    this.subscribeWorkoutList = workoutService.notifyOfWorkoutPlanList.subscribe((value) => { 
      this.workoutPlanList = value; 
    });

    this.subscribeWorkout = workoutService.notifyOfWorkoutPlan.subscribe((value) => { 
      this.currentWorkoutPlan = value; 
    });

  }

   subscribeWorkoutList;
   subscribeWorkout;

   workoutPlanList: WorkoutPlan[];
   currentWorkoutPlan: WorkoutPlan;

   

   userId: number = 1;
   
   workoutList: FocusedMVP[];
   //  Find a better way(it gets userName from getworkoutsByUser())
   userName: string;
  
  ngOnInit(): void {
    this.getWorkoutsByUser();
  }


  //Still hardcoded for user 1!
  // getWorkoutsByUser() {
    
  //   this.workoutService.getWorkoutsByUserUpdated(1);
  //   console.log(this.workoutPlanList);
  

   getWorkoutsByUser() {
    
    if(localStorage.getItem('userId')) {
       this.userName = localStorage.getItem('userName');
       
       this.workoutService.getWorkoutsByUser(localStorage.getItem('userId') as unknown as number);
       
       console.log(this.workoutList);
       console.log(typeof(this.workoutList));
       
    } else {
      alert('You must be signed in to get saved workouts');
    }

  }

  selectWorkoutFromList(selectedIndex: number) {
    this.workoutService.selectWorkoutPlanFromList(selectedIndex);
    console.log(this.currentWorkoutPlan);
  }
 
  
}




