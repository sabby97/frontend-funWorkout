import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { FocusedMVP } from '../models/focusedMVP';

@Injectable({
  providedIn: 'root'
})
export class GenerateWorkoutService {

  constructor() { }

  
  async generateRandomWorkout() {

    let httpResponse = await fetch(`http://localhost:8080/exercises/randomList`, {method: 'GET'});
    let generatedWorkoutData = await httpResponse.json();

    let focusedMVP = new FocusedMVP();
    focusedMVP.exercises = generatedWorkoutData;

    localStorage.setItem('focusedWorkout', JSON.stringify(focusedMVP));

    console.log(localStorage.getItem('focusedWorkout'));

  }

  async generateCustomWorkout(intensity: number) {

    const bodyData = {
      intensity: intensity,
    };
    let httpResponse = await fetch(`http://localhost:8080/exercises/customList`, {
        method: 'POST',
        headers: new Headers({'content-type': 'application/json'}),
        body: JSON.stringify(bodyData)
        
    });
    let generatedWorkoutData = await httpResponse.json();

    let focusedMVP = new FocusedMVP();
    focusedMVP.exercises = generatedWorkoutData;

    localStorage.setItem('focusedWorkout', JSON.stringify(focusedMVP));

    console.log(localStorage.getItem('focusedWorkout'));

  }

}
