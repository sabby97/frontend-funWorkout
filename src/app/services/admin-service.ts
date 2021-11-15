import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { User } from "../models/User";
import { Exercise } from '../models/Exercise';
import { Subject } from 'rxjs';
import { WorkoutService } from './workout-service';
import { ExerciseTarget } from '../models/ExerciseTarget';


@Injectable({
  providedIn: 'root'
})
export class AdminService {

    constructor(private http: HttpClient){}


    currentUser:User;
    currentExercise:Exercise;
    headers:Headers;
    body:Body;
    notifyOfExercise:Subject<Exercise>= new Subject<Exercise>();
    
    adminVal:boolean;

    // async returnAdmin(){
    //   return this.adminVal;
    // }
    async checkAdmin(check:boolean) 
     {
       return check;

       
     }
    

    async addExercise(exerciseName: string, exerciseIntensity: number, exercisePrimaryTarget_fk: ExerciseTarget, exerciseDescription: string)
    {
      const bodyData = {
        exerciseName:exerciseName,
        exerciseIntensity:exerciseIntensity,
        exercisePrimaryTarget_fk:exercisePrimaryTarget_fk,
        exerciseDescription:exerciseDescription
      };
      console.log(exercisePrimaryTarget_fk.exerciseTargetName);
      let httpResponse = await fetch(`http://localhost:8080/exercises/`, {
          method: 'POST',
          headers: new Headers({'content-type': 'application/json'}),
          body: JSON.stringify(bodyData)     
      });
    }

    async deleteExercise(exerciseID: number)
    {
      let httpResponse = await fetch(`http://localhost:8080/exercises/${exerciseID}`, {
        method: 'DELETE',
        headers: new Headers({'content-type': 'application/json'}),
    });
    }

    async updateExercise(exerciseID: number, exerciseName: string, exerciseIntensity: number, exercisePrimaryTarget_fk: ExerciseTarget, exerciseDescription: string)
    {
      const bodyData = {
        exerciseId:exerciseID,
        exerciseName:exerciseName,
        exerciseDescription:exerciseDescription,
        exercisePrimaryTarget_fk:exercisePrimaryTarget_fk,
        exerciseIntensity:exerciseIntensity
        
        
      };
      console.log(bodyData);
      let httpResponse = await fetch(`http://localhost:8080/exercises/${exerciseID}`, {
          method: 'PUT',
          headers: new Headers({'content-type': 'application/json'}),
          body: JSON.stringify(bodyData)
      });
      
    }

    async getExercise(exerciseID : number)
    {
      console.log(exerciseID);
      this.http.get<Exercise>(`http://localhost:8080/exercises/${exerciseID}`).subscribe(
        (response)=>{
          console.log(response);
          if(response!=null) {
            console.log(response.exerciseName);
            this.currentExercise = response;
            console.log(this.currentExercise)
            this.notifyOfExercise.next(this.currentExercise);
            
          }
        }
      )
      
    //   let httpResponse = await fetch(`http://localhost:8080/exercises/`+exerciseID, {
    //     method: 'GET',
    //     headers: new Headers({'content-type': 'application/json'}),
   
    // });
    }
  }