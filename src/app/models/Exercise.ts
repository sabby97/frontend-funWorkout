import { ExerciseTarget } from './ExerciseTarget';

export class Exercise{
    exerciseId: number;
    exerciseName: string;
    exerciseDescription: string;
    exerciseTarget:ExerciseTarget;
    exerciseIntensity: number;
        
    constructor(exerciseName:string,exerciseDescription:string){
        this.exerciseName=exerciseName;
        this.exerciseDescription=exerciseDescription;
    };
}
