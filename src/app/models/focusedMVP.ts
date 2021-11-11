// import { SrvRecord } from "dns";
import { ExerciseTarget } from "./ExerciseTarget";
import {Exercise} from "./Exercise";
export class FocusedMVP
{

  constructor() {};

title = 'funWorkoutFrontend';
  description='this will be the area for the workout something here';
  workout='Exercise name';

  userId:number;
  workoutPlanId:number;
  workoutName:string;
  exercises:Array<Exercise>;

  
}