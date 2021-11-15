import { Component, OnInit } from '@angular/core';
import { from, Subscription } from 'rxjs';
import { Admin } from 'src/app/models/Admin';
import { Exercise } from 'src/app/models/Exercise';
import { ExerciseTarget } from 'src/app/models/ExerciseTarget';
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
  subExercise:Subscription;
  adminUser:User;
  checkAdmin:Boolean;
  admin:Admin;
  adminBool: Boolean;
  exerciseID:number;
  exerciseName:string;
  exerciseIntensity:number;
  
  exerciseTarget:ExerciseTarget;
  exerciseTargetNames = ["arms", "chest", "back", "legs", "core", "glutes", "cardio"];
  exerciseTargetId:number;
  exerciseDescription:string;
  currentExercise:Exercise;

  addButtonToggle:boolean =false;
  getButtonToggle:boolean =false;
  updateButtonToggle:boolean =false;
  deleteButtonToggle:boolean =false;



  constructor(private adminService:AdminService, private signInService:SignInService) 
  {
    this.sub = signInService.notifyOfAdmin.subscribe((admin) => 
    {this.adminBool = admin.value;})

    this.subExercise = adminService.notifyOfExercise.subscribe((value)=>
    {this.currentExercise = value;})

   }

  ngOnInit(): void {
   // this.adminChecker();
  }



  addExercise(){
    console.log(this.exerciseTargetId);
    this.exerciseTarget = new ExerciseTarget(this.exerciseTargetId, this.exerciseTargetNames[this.exerciseTargetId]);
    console.log(this.exerciseTarget);
    this.adminService.addExercise(this.exerciseName, this.exerciseIntensity, this.exerciseTarget, this.exerciseDescription);
    this.addButtonToggle=true;
  }
 
  getExercise(){
    this.adminService.getExercise(this.exerciseID);
    console.log(this.currentExercise)
    if(this.adminService.notifyOfExercise)
      this.getButtonToggle=true;
  }

  updateExercise(){
    this.exerciseTarget=new ExerciseTarget(this.exerciseTargetId, this.exerciseTargetNames[this.exerciseTargetId]);
    this.adminService.updateExercise(this.exerciseID, this.exerciseName, this.exerciseIntensity, this.exerciseTarget, this.exerciseDescription);
    this.updateButtonToggle=true;
  }
  
  deleteExercise(){
    this.adminService.deleteExercise(this.exerciseID);
    this.deleteButtonToggle=true;
  }

}
