import { Component, Injectable, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/models/User';
import { SignInService } from 'src/app/services/sign-in-service';
import { WorkoutPlanDisplayComponent } from '../workout-plan-display/workout-plan-display.component';

@Injectable({
  providedIn:'root'
})

@Component({
  selector: 'app-sign-in-out',
  templateUrl: './sign-in-out.component.html',
  styleUrls: ['./sign-in-out.component.css']
})
export class SignInOutComponent implements OnInit {

  constructor(private signInService: SignInService, private workoutPlanList: WorkoutPlanDisplayComponent) { }

  ngOnInit(): void {
    
  }

  username: string;
  password: string;
  
  signedOutToggle: boolean = true;
  
  currentUser: User;
  newUser: User;
  
  
  async signIn() {
  
    this.currentUser = null;
    // if a user name and password has been entered continue
    if (this.username != null && this.password != null) {
        this.currentUser = await this.signInService.signIn(this.username, this.password);
    
    if (this.currentUser.userId !== 0 && this.currentUser != null) {
      
      this.signedOutToggle = false;
      // this.username = "";
      // this.password = "";
      
      // Calls getWorkoutsByUser() in order to populate list of saved workouts 
      // when a user signs in
      this.workoutPlanList.getWorkoutsByUser(this.currentUser.userId);
      this.workoutPlanList.getRecommendedWorkouts();

    } else {
      alert("There is no user with these credentials.  Please try again.");
      this.signOut();
    }

    } else {
      alert("Please enter a user name and password");
    }
  }

  signOut() {
      this.signInService.signOut();
      this.signedOutToggle = true;

      
      // username and password inputs after sign out
      this.currentUser = null;
      this.password = "";
      this.username = "";

      
  }

  signUp() {
    
    if (this.username != null && this.password != null && this.username != "" && this.password != "") {
      this.newUser = new User(this.username, this.password, false);
      
       this.signInService.signUp(this.newUser);
      
     
    } else {
      alert("Please enter a name and a password");
    } 
  }

}
