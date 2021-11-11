import { User } from './User';
import { Exercise } from './Exercise';

export class WorkoutPlan{

    workoutplanId: number;
    workoutName: string;
    exerciseList: Exercise[];
    user: User;

    workoutlikes:number;
    isRecommended:boolean;
       
    /*
    constructor(exerciseList: Exercise[], workoutplanId?: number, workoutName?: string, user?: User){
        this.workoutplanId = workoutplanId;
        this.workoutName = workoutName;
        this.exerciseList = exerciseList;
        this.user = user;

    };
    
   constructor(object?: Object) {
       Object.assign(this, object);
   }
   */
}
