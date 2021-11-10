import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { workoutPlan } from "../models/workoutPlan";
import { Observable } from "rxjs";


@Injectable({
    providedIn:'root'
})

export class WorkoutService {

    constructor(private http: HttpClient) {}

    

    // we need to make call a to the backend to grab a list of workouts by user to this endpoint:
    // `http://localhost:8080/users/${userId}/workouts`
    getWorkoutsByUser(userId : number): Observable<workoutPlan[]>{
        let workoutList: Observable<workoutPlan[]>

        


        return workoutList;
    }



   
}