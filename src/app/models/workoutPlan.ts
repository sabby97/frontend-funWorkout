import { NumberValueAccessor } from "@angular/forms";

import { User } from "../models/User";
export class workoutPlan{

    workoutplanId: Number;
    workoutName:string;
    user:User;
    workoutlikes:number;
    isRecommended:boolean;

    
    constructor(workoutplanId: Number, workoutName:string, user:User,workoutlikes:number, isRecommended:boolean)
    {
        this.isRecommended=isRecommended;
        this.user=user;
        this.workoutName=workoutName;
        this.workoutlikes = workoutlikes;
        this.workoutplanId= workoutplanId;
    }

//array of exercise
//
}