// import { SrvRecord } from "dns";
import { ExerciseTarget } from "../models/ExerciseTarget";
import {Exercise} from "../models/Exercise";
export class focusedMVP
{
title = 'funWorkoutFrontend';
  description='this will be the area for the workout something here';
  workout='Exercise name';

  userId:number;
  workoutId:number;
  workoutName:string;
  exercises:Array<Exercise>;
}