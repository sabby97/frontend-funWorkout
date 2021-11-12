import { Component, OnInit } from '@angular/core';
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
    
    if (this.currentUser.userId !== 0) {
      this.signedOutToggle = false;
      this.username = "";
      this.password = "";
      
      // Calls getWorkoutsByUser() in order to populate list of saved workouts 
      // when a user signs in
      this.workoutPlanList.getWorkoutsByUser();

    } else {
      alert("There is no user with these credentials.  Please try again.");
      this.signOut();
    }
  }

  signOut() {
      this.signInService.signOut();
      this.signedOutToggle = true;
  }

}
