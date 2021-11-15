import { Component, OnInit } from '@angular/core';
import { from, Subscription } from 'rxjs';
import { Admin } from 'src/app/models/Admin';
import { User } from 'src/app/models/User';
import { AdminService } from 'src/app/services/admin-service';
import { SignInService } from 'src/app/services/sign-in-service';
@Component({
  selector: 'app-admin-display',
  templateUrl: './admin-display.component.html',
  styleUrls: ['./admin-display.component.css']
})
export class AdminDisplayComponent implements OnInit {

  sub:Subscription;
  adminUser:User;
  checkAdmin:Boolean;
  admin:Admin;
  adminBool: Boolean;
  exerciseID:number;
  exerciseName:string;
  exerciseIntensity:number;
  exerciseTarget:number;
  exerciseDescription:string;

  constructor(private adminService:AdminService, private signInService:SignInService) 
  {
    this.sub = signInService.notifyOfAdmin.subscribe((admin) => 
    {this.adminBool = admin.value;})

   }

  ngOnInit(): void {
   // this.adminChecker();
  }

  addExercise(){
    this.adminService.addExercise(this.exerciseName, this.exerciseIntensity, this.exerciseTarget, this.exerciseDescription);
  }
 
  getExercise(){
    this.adminService.getExercise(this.exerciseID);
  }

  updateExercise(){
    this.adminService.updateExercise(this.exerciseID, this.exerciseName, this.exerciseIntensity, this.exerciseTarget, this.exerciseDescription);
  }
  
  deleteExercise(){
    this.adminService.deleteExercise(this.exerciseID);
  }

}
