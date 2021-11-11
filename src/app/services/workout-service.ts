import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { workoutPlan } from "../models/workoutPlan";
import { Observable, Subject } from "rxjs";
import { FocusedMVP } from "../models/focusedMVP";
import { Exercise } from "../models/Exercise";


@Injectable({
    providedIn:'root'
})

export class WorkoutService {

    constructor(private http: HttpClient) {}
    
    currentWorkout: FocusedMVP;
    workoutList: FocusedMVP[] = [];
    
    // notifyFocusedWorkout: Subject<FocusedMVP> = new Subject<FocusedMVP>();
    notifyOfWorkoutList: Subject<FocusedMVP[]> = new Subject<FocusedMVP[]>();

    // we need to make call a to the backend to grab a list of workouts by user to this endpoint:
    // `http://localhost:8080/users/${userId}/workouts`
    getWorkoutsByUser(userId : number){
       
          this.http.get<FocusedMVP[]>(`http://localhost:8080/users/${userId}/workouts`).subscribe(
              (response)=>{
                //   focusedMvp = new FocusedMVP();
                  this.workoutList = response;
                  this.notifyOfWorkoutList.next(this.workoutList);
              }
          )

    }

    // let jsonObject = response.json() as Object;
    // let fooInstance = plainToClass(Models.Foo, jsonObject);
    // return fooInstance;
    



   
}