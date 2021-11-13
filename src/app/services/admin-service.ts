import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { User } from "../models/User";
import { Exercise } from '../models/Exercise';


@Injectable({
  providedIn: 'root'
})
export class AdminService {

    constructor(private http: HttpClient){}


    currentUser:User;
    currentExercise:Exercise;
    headers:Headers;
    body:Body;
    
    adminVal:boolean;

    // async returnAdmin(){
    //   return this.adminVal;
    // }
    // async CheckAdmin(check:boolean) 
    // {
    //   this.adminVal= check;
       
    // }
    

    async addExercise(exerciseName: string, exerciseIntensity: number, exercisePrimaryTarget_fk: number, exerciseDescription: string)
    {
      const bodyData = {
        exerciseName:exerciseName,
        exerciseIntensity:exerciseIntensity,
        exercisePrimaryTarget_fk:exercisePrimaryTarget_fk,
        exerciseDescription:exerciseDescription
      };
      let httpResponse = await fetch(`http://localhost:8080/exercises/`, {
          method: 'POST',
          headers: new Headers({'content-type': 'application/json'}),
          body: JSON.stringify(bodyData)
          
      });
    }

    async deleteExercise(exerciseID: number)
    {
      let httpResponse = await fetch(`http://localhost:8080/exercises/`+exerciseID, {
        method: 'DELETE',
        headers: new Headers({'content-type': 'application/json'}),
    });
    }

    async updateExercise(exerciseID: number, exerciseName: string, exerciseIntensity: number, exercisePrimaryTarget_fk: number, exerciseDescription: string)
    {
      const bodyData = {
        exerciseID:exerciseID,
        exerciseName:exerciseName,
        exerciseIntensity:exerciseIntensity,
        exercisePrimaryTarget_fk:exercisePrimaryTarget_fk,
        exerciseDescription:exerciseDescription
      };
      let httpResponse = await fetch(`http://localhost:8080/exercises/`+exerciseID, {
          method: 'PUT',
          headers: new Headers({'content-type': 'application/json'}),
          body: JSON.stringify(bodyData)
          
      });
      
    }

    async getExercise(exerciseID : number)
    {
      let httpResponse = await fetch(`http://localhost:8080/exercises/`+exerciseID, {
        method: 'GET',
        headers: new Headers({'content-type': 'application/json'}),
   
    });
    }
  }