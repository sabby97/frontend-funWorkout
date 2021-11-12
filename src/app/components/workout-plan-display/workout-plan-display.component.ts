import { Component, Injectable, OnInit } from '@angular/core';
import { WorkoutService } from 'src/app/services/workout-service';
import { Observable } from 'rxjs';
import { WorkoutPlan } from 'src/app/models/WorkoutPlan';

@Injectable({
  providedIn:'root'
})

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

   userId: number;

  ngOnInit(): void {
    this.getWorkoutsByUser();
  }
  
   getWorkoutsByUser() {
    
    if(localStorage.getItem('userId')) {
       
       this.workoutService.getWorkoutsByUser(localStorage.getItem('userId'));
       
       console.log(this.workoutPlanList);
       console.log(typeof(this.workoutPlanList));
       
    } else {
      alert('You must be signed in to get saved workouts');
    }

  }

  selectWorkoutFromList(selectedIndex: number) {
    this.workoutService.selectWorkoutPlanFromList(selectedIndex);
    console.log(this.currentWorkoutPlan);
  }
 
  
}




