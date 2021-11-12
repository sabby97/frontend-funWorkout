import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { WorkoutPlan } from "../models/WorkoutPlan";
import {FocusedMVP} from "../models/focusedMVP";

// import { focusedMVP } from "../models/focusedMVP";

@Injectable({
    providedIn: 'root'
})

export class focusedMVPservice
{
    constructor(private http: HttpClient) {}

    //for updating a workout like 
   async updateLikes(workoutlikes:number, exerciseId:number)
   {
            const bodyData = {
            workoutlikes:workoutlikes= workoutlikes
                };

        let httpResponse = await fetch(`http://localhost:8080/exercises/`+exerciseId, {
            method: 'PATCH',
            headers: new Headers({'content-type': 'application/json'}),
            body: JSON.stringify(bodyData)
            });
    };
    

    async removeExercise(exerciseId:number)
    {
        const bodyData = { };

        let httpResponse = await fetch(`http://localhost:8080/exercises/`+exerciseId, {
            method: 'DELETE',
            headers: new Headers({'content-type': 'application/json'}),
            body: JSON.stringify(bodyData)
            });
    }
    

}