import { Component, OnInit, ViewChild } from '@angular/core';
import { User } from 'src/app/models/User';
import { SignInService } from 'src/app/services/sign-in-service';
import { WorkoutPlanDisplayComponent } from '../workout-plan-display/workout-plan-display.component';

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
  
  
  async signIn() {
  
    this.currentUser = await this.signInService.signIn(this.username, this.password);
    
    if (localStorage.getItem("userId") as unknown as number !== 0) {
      this.signedOutToggle = false;
      // this.username = "";
      // this.password = "";
      
      // Calls getWorkoutsByUser() in order to populate list of saved workouts 
      // when a user signs in
      this.workoutPlanList.getWorkoutsByUser(this.currentUser.userId);

    } else {
      alert("There is no user with these credentials.  Please try again.");
      this.signOut();
    }
  }

  signOut() {
      this.signInService.signOut();
      this.signedOutToggle = true;
  }

  signUp() {
    
    if (this.username !== "" && this.password !== "") {
      this.currentUser = new User(this.username, this.password, false);
      
      this.signInService.signUp(this.currentUser);
      
      this.signIn();
    
    } else {
      alert("Please enter a name and a password");
    }
  }

}
