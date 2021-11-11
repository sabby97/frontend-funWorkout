import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable, Subject } from "rxjs";
import { FocusedMVP } from "../models/focusedMVP";

import { WorkoutPlan } from "../models/WorkoutPlan";
import { User } from "../models/User";
import { Exercise } from "../models/Exercise";
import { ExerciseTarget } from "../models/ExerciseTarget";

@Injectable({
    providedIn:'root'
})

export class WorkoutService {

    constructor(private http: HttpClient) {}
    
    //Delete these four once the WorkoutPlan model is fully implemented in place of focuedMVP
    currentWorkout: FocusedMVP;
    workoutList: FocusedMVP[] = [];
    notifyFocusedWorkout: Subject<FocusedMVP> = new Subject<FocusedMVP>();
    notifyOfWorkoutList: Subject<FocusedMVP[]> = new Subject<FocusedMVP[]>();

    //The WorkoutPlan that is (should be!) currently displayed in the workout focus.
    currentWorkoutPlan: WorkoutPlan;
    //The array of WorkoutPlans that is currently displayed in the workout-plan-display component.
    currentWorkoutPlanList: WorkoutPlan[] = [];
    
    //The Subject that broadcasts the current WorkoutPlan to display in the workout focus component
    notifyOfWorkoutPlan: Subject<WorkoutPlan> = new Subject<WorkoutPlan>();
    //The Subject that broadcasts the current Array of WorkoutPlans to display in the workout-plan-display component.
    notifyOfWorkoutPlanList: Subject<WorkoutPlan[]> = new Subject<WorkoutPlan[]>();
    

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

    

    getWorkoutsByUserUpdated(userId : number){

        this.http.get<WorkoutPlan[]>(`http://localhost:8080/users/${userId}/workouts`).subscribe(
            (response)=>{

              //Converts the json into an array of WorkoutPlan objects
                let newWorkoutPlanArray: WorkoutPlan[] = [];

                response.forEach(workoutJson => {
                    let newWorkoutPlan: WorkoutPlan = this.convertWorkoutPlanFronJson(workoutJson);
                    newWorkoutPlanArray.push(newWorkoutPlan);
                })

                this.currentWorkoutPlanList = newWorkoutPlanArray;
                this.notifyOfWorkoutPlanList.next(this.currentWorkoutPlanList);
            }
        )

    }

    selectWorkoutPlanFromList(selectedIndex: number) {
      this.currentWorkoutPlan = this.currentWorkoutPlanList[selectedIndex];
      this.notifyOfWorkoutPlan.next(this.currentWorkoutPlan);
    }

    // let jsonObject = response.json() as Object;
    // let fooInstance = plainToClass(Models.Foo, jsonObject);
    // return fooInstance;
    /*
    getSingleWorkout(workoutId: number){

        this.http.get<WorkoutPlan>(`http://localhost:8080//workouts/1`).subscribe(
            (response)=>{

                let newWorkoutPlan = this.convertWorkoutPlanFronJson(response);

                this.currentWorkoutPlan = newWorkoutPlan;
                this.notifyOfWorkoutPlan.next(this.currentWorkoutPlan);
            }
        )

  }
  */

  async generateRandomWorkout() {

    let httpResponse = await fetch(`http://localhost:8080/exercises/randomList`, {method: 'GET'});
    let generatedWorkoutData = await httpResponse.json();

    let newWorkoutPlan = new WorkoutPlan();
    newWorkoutPlan.exerciseList = this.convertExercisesFromJson(generatedWorkoutData);
    newWorkoutPlan.workoutName = "New Random Workout";

    this.currentWorkoutPlan = newWorkoutPlan;
    this.notifyOfWorkoutPlan.next(this.currentWorkoutPlan);

    console.log(this.currentWorkoutPlan);

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

    let newWorkoutPlan = new WorkoutPlan();
    newWorkoutPlan.exerciseList = this.convertExercisesFromJson(generatedWorkoutData);
    newWorkoutPlan.workoutName = "New Custom Workout";

    this.currentWorkoutPlan = newWorkoutPlan;
    this.notifyOfWorkoutPlan.next(this.currentWorkoutPlan);
    //Set the user info here, since only a logged in user can generate this

    console.log(this.currentWorkoutPlan);

  }


  //Conversion function for translating json to front end models

  //Converts an appropriate json object into a WorkoutPlan
  convertWorkoutPlanFronJson(jsonIn: WorkoutPlan): WorkoutPlan{
    let newWorkoutPlan = new WorkoutPlan();
    newWorkoutPlan.workoutName = jsonIn.workoutName;         
    newWorkoutPlan.workoutplanId = jsonIn.workoutplanId;
    newWorkoutPlan.isRecommended = jsonIn.isRecommended;
    newWorkoutPlan.workoutlikes = jsonIn.workoutlikes;
    newWorkoutPlan.exerciseList = this.convertExercisesFromJson(jsonIn.exerciseList);
    newWorkoutPlan.user = this.convertUserFromJson(jsonIn.user);

    return newWorkoutPlan;
  }

  //Converts an appropriate json object into a User
  convertUserFromJson(jsonIn: User): User {
    let newUser = new User();
    newUser.userId = jsonIn.userId;
    newUser.userName = jsonIn.userName;
    newUser.password = jsonIn.password;
    newUser.isAdmin = jsonIn.admin;
    return newUser;
  }

  //Converts an appropriate json object into an array of Exercises
  convertExercisesFromJson(jsonInArray: Exercise[]): Exercise[] {
    let newExerciseArray: Exercise[] = [];
    jsonInArray.forEach(exerciseJson => {
        let newExercise = new Exercise(exerciseJson.exerciseName, exerciseJson.exerciseDescription);
        newExercise.exerciseId = exerciseJson.exerciseId;
        newExercise.exerciseIntensity = exerciseJson.exerciseIntensity;
        newExercise.exerciseTarget = this.convertExerciseTargetFromJson(exerciseJson.exerciseTarget);
        newExerciseArray.push(newExercise);
    });
    return newExerciseArray;
  }

  //Converts an appropriate json object into an ExerciseTarget
  convertExerciseTargetFromJson(jsonIn: ExerciseTarget): ExerciseTarget {
    let newExerTarget = new ExerciseTarget(jsonIn.exerciseTargetId, jsonIn.exerciseTargetName);
    return newExerTarget;
  }

    
   
}