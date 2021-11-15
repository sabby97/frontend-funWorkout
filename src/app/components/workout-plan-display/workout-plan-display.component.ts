import { Component, Injectable, OnInit, } from '@angular/core';
import { WorkoutService } from 'src/app/services/workout-service';
import { Observable } from 'rxjs';
import { WorkoutPlan } from 'src/app/models/WorkoutPlan';
import { SignInService } from 'src/app/services/sign-in-service';


@Injectable({
  providedIn:'root'
})

@Component({
  selector: 'app-workout-plan-display',
  templateUrl: './workout-plan-display.component.html',
  styleUrls: ['./workout-plan-display.component.css']
})
export class WorkoutPlanDisplayComponent implements OnInit {

  constructor(private workoutService: WorkoutService, private signInservice: SignInService) { 
    this.subscribeRecommendedList = workoutService.notifyOfRecommendedWorkoutList.subscribe(
      (value) => {
        this.recommendedWorkoutList = value;
      });

    this.subscribeWorkoutList = workoutService.notifyOfWorkoutPlanList.subscribe((value) => { 
      this.workoutPlanList = value; 
    });

    this.subscribeWorkout = workoutService.notifyOfWorkoutPlan.subscribe((value) => { 
      this.currentWorkoutPlan = value; 
    });

  }

   subscribeRecommendedList;
   subscribeWorkoutList;
   subscribeWorkout;

   recommendedWorkoutList: WorkoutPlan[];
   workoutPlanList: WorkoutPlan[];
   currentWorkoutPlan: WorkoutPlan;
   userName: string = localStorage.getItem("userName");

   userId: number;

  ngOnInit(): void {
    
  }
  
   getWorkoutsByUser(userId : number) {
    
    if(localStorage.getItem('userId')) {
       
       this.workoutService.getWorkoutsByUser(localStorage.getItem('userId'));
       
    } else {
      alert('You must be signed in to get saved workouts');
    }

  }

  getRecommendedWorkouts() {
    this.workoutService.getRecommendedWorkouts();
  }

  selectWorkoutFromList(selectedIndex: number) {
    this.workoutService.selectWorkoutPlanFromList(selectedIndex);
    console.log(this.currentWorkoutPlan);
  }

  selectRecommendedWorkoutFromList(recommendedWorkout: WorkoutPlan) {
    this.currentWorkoutPlan = recommendedWorkout;
    this.workoutService.notifyOfWorkoutPlan.next(this.currentWorkoutPlan);
    console.log("Pulling " + this.currentWorkoutPlan.workoutName + " from recommended workouts");
  }

  
}



