import { Target } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/User';
import { ExerciseTarget } from 'src/app/models/ExerciseTarget';
import { WorkoutPlan } from 'src/app/models/WorkoutPlan';
import { Exercise } from "src/app/models/Exercise";
import { from, Subscription } from 'rxjs';
import { WorkoutService } from 'src/app/services/workout-service';
import { focusedMVPservice } from 'src/app/services/focused-MPV-service';



@Component({
  selector: 'app-focused-mvp',
  templateUrl: './focused-mvp.component.html',
  styleUrls: ['./focused-mvp.component.css']
})
export class FocusedMvpComponent implements OnInit {
  // coded needed to work//
  subscribeWorkout: Subscription;
  currentWorkoutPlan:WorkoutPlan = new WorkoutPlan();
  workoutPlan:WorkoutPlan;
  workoutlikes:WorkoutPlan['workoutlikes'];
  likesCalled:number=0;


//construtor for the workout object 
  constructor(private workoutService: WorkoutService) 
  { 
//                                          subject             listen to upadtes ->do this 
    this.subscribeWorkout = workoutService.notifyOfWorkoutPlan.subscribe((value) => { 
      this.workoutPlan = value; 
    });

  }

  //place holders
  title = 'funWorkoutFrontend';
          // description= [{Exercisea.exerciseDescription}];
  description='this will be the area for the workout something here';
  workout='Exercise name';
  ExerciseName='place holder'
  globalNUM:number=0;
  Areatarget="placeholder";
//object creations for testing(object path view)
  
  user:User={
            userId: 1,
            userName: "anthony",
            password: "one",
            isAdmin: true,
            admin:true
  };
  target:ExerciseTarget={
              exerciseTargetId: 1,
            exerciseTargetName: "arms two"
  };
  
  // workoutobject= currentWorkoutPlan
  // workoutPlan:WorkoutPlan;
        // {
          // workoutplanId: 1,
          // workoutName:"arm bench press",
          // workoutlikes:35,
          // user:this.user,
          // isRecommended:true,
          // exerciseList
          // exerciseList: this.ExerciseList
  // };
  
  Exercise:Exercise={
    exerciseId: 1,
    exerciseName: "bench press 100lb",
    exerciseDescription: "this is the arm workout description that has been created in the focus mvp section:) this was torture to intalize in typescript ",
    exerciseTarget:this.target,
    exerciseIntensity :1
  }


  // //ARRAY CREATIN 
  ExerciseList:Exercise[]=[
    {
      exerciseId: 1,
      exerciseName: "bench press 10lb",
      exerciseDescription: "this is the bench press 10lb workout description that has been created in the focus mvp section:) this was torture to intalize in typescript ",
      exerciseTarget:this.target,
      exerciseIntensity :1
    },
  {
    exerciseId: 2,
    exerciseName: "bench press 200lb",
    exerciseDescription: "this is the bench press 200lb workout description that has been created in the focus mvp section:) this was torture to intalize in typescript ",
    exerciseTarget:this.target,
    exerciseIntensity :12
  },
  {
    exerciseId: 3,
    exerciseName: "bench press 30lb",
    exerciseDescription: "this is the bench press 30lb workout description that has been created in the focus mvp section:) this was torture to intalize in typescript ",
    exerciseTarget:this.target,
    exerciseIntensity :3
  },
  {
    exerciseId: 4,
    exerciseName: "bench press 4lb",
    exerciseDescription: "this is the bench press 30lb workout description that has been created in the focus mvp section:) this was torture to intalize in typescript ",
    exerciseTarget:this.target,
    exerciseIntensity :4
  },
  {
    exerciseId: 5,
    exerciseName: "bench press 500-0lb",
    exerciseDescription: "this is the bench press 500-0lb workout description that has been created in the focus mvp section:) this was torture to intalize in typescript ",
    exerciseTarget:this.target,
    exerciseIntensity :5
  }
];
userList:User[]=[{
            userId: 2,
            userName: "simion",
            password: "one",
            isAdmin: false,
            admin:false
},
{ 
            userId: 3,
            userName: "batman",
            password: "one",
            isAdmin: true,
            admin:true
}
];
targetList:ExerciseTarget[]=[
  {
      exerciseTargetId: 1,
      exerciseTargetName: "TARGET arms ONE"
  },
  {
    exerciseTargetId: 2,
    exerciseTargetName: "TARGET arms TWO"
  },
  {
    exerciseTargetId: 3,
    exerciseTargetName: " TARGET arms THREE"
  },
  {
    exerciseTargetId: 4,
    exerciseTargetName: "TARGET arms FOUR"
  },
  {
    exerciseTargetId: 5,
    exerciseTargetName: " TARGET arms FIVE"
  }

]
workoutPlanList:WorkoutPlan[]=[
  {
    // workoutplanId: 2,
    // workoutName:"leg bench press",
    // workoutlikes:35,
    // user:this.user,
    // isRecommended:true},
    // exerciseList: Exercise[]
    workoutplanId: 2,
    workoutName: "leg bench press",
    exerciseList: this.ExerciseList,
    user: this.user,

    workoutlikes:35,
    isRecommended:true,
  },

  {
    workoutplanId: 3,
    workoutName:"sholders bench press",
    workoutlikes:35,
    user:this.user,
    isRecommended:false,
    exerciseList: this.ExerciseList}
    
  

];



  

  ngOnInit(): void {
    // this.description=
    // console.log(this.workoutPlan.workoutlikes);
    // console.log(this.ExerciseList); 
    
  }

  liked():void{
    //will be used to add +1 to a specfic workout plan 
    console.log("the like function was called");
    console.log(this.currentWorkoutPlan)

    let count:number=0;
    count=count+1;
    console.log("this is the count "+ count);
    // this.workoutPlanList[1].workoutlikes+=1;
    // console.log(this.workoutPlanList[1].workoutlikes);
    



  }



  
  hate():void{
    //will be used to remove a exercise or delete a workout
    console.log("the hate button was clicked ");
  }



  randomGen():void{
    console.log("the random gen was clicked");
    // console.log(this.test);
    //this code below is used to create a ran
    let random:number;
    random=Math.floor(Math. random() *4) + 1
    this.globalNUM=random;
    
    console.log(random+":random value");
    // alert("the value for gloabl num is "+this.globalNUM );  

    this.setAll(random);  

  }


//test is update button
  test():void
  {

          const usera=
          {
            userId: 1,
            userName: "one",
            password: "one",
            isAdmin: true
          }
          const targeta={
            exerciseTargetId: 1,
            exerciseTargetName: "arms two",
  
          }
        const workoutPlana =
        {
          workoutplanId: 1,
          workoutName:"arms",
          workoutlikes:35,
          user:usera,
          isRecommended:true
        }
        const Exercisea={
          exerciseId: 1,
          exerciseName: "arms",
          exerciseDescription: "this is teh arm",
          exerciseTarget:targeta
        }
        const allAttri={
          usera,targeta,workoutPlana,Exercisea
        }
        // description= {{Exercisea.exerciseDescription}};
        // workout=workoutPlana.workoutName;

        // end of test ()
        console.log( usera );
        console.log( targeta );
        console.log( workoutPlana );
        console.log( Exercisea );
        console.log("this is all atributes below" );
        console.log(allAttri);
  }



  setAll(random:number):void{
    console.log("this set all functon was called");
    console.log("passed in value is "+random);
    let index:number=random;

    // alert(this.ExerciseList[1]);
    console.log(this.ExerciseList[(index)]);
    this.Exercise.exerciseDescription=this.ExerciseList[(index)].exerciseDescription;
    this.ExerciseName=this.ExerciseList[(index)].exerciseName;
    // this.Areatarget=this.ExerciseList[(index)].exerciseTarget;
    // this.Areatarget  =this.ExerciseList[(index)].exerciseTarget.exerciseTargetName;
    this.Areatarget=this.targetList[(index)].exerciseTargetName;

    

    console.log("end of all setter");
  }
 
  setAllList():void
  {}
  delete(id :number):void{
    console.log("calling delete funtion to remove id "+id );
    // service layer call
    // focusedMVPservice.removeExercise(id);

  }
  like(passedWorkoutPlan:WorkoutPlan):void{
    if (this.likesCalled==0)
    {// console.log("calling the like function by id "+id );
    console.log(passedWorkoutPlan);

    // this.currentWorkoutPlan= this.currentWorkoutPlan;
      passedWorkoutPlan.workoutlikes= passedWorkoutPlan.workoutlikes+1;
    console.log(passedWorkoutPlan);
    // focusedMVPservice.updateLikes(id);
    this.likesCalled=1;

  }

  }
  
}
