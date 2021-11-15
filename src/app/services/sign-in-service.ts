import { Injectable, OnInit } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { User } from "../models/User";
import { Subject } from "rxjs";
import { Admin } from "../models/Admin";
import { WorkoutService } from 'src/app/services/workout-service';

@Injectable({
    providedIn: 'root'
})

export class SignInService{

    constructor(private http: HttpClient) { }

    workoutService: WorkoutService;

    connectToWorkoutService(workoutServiceIn: WorkoutService) {
        this.workoutService = workoutServiceIn;
    }

    // The signed in user should be available here.  Access it by injecting this
    // Service into your component class constructor
    currentUser: User;
    notifyOfUser: Subject<User> = new Subject<User>();

    currentAdmin: Admin;

    // to let admin access know if the user loggin in is an admin
    notifyOfAdmin: Subject<Admin> = new Subject<Admin>();


    private postHeaders = new HttpHeaders({ 'Context-Type': 'application/json' });
    
    async signIn(username: string, password: string):Promise<User> {

     
        let httpResponse = await fetch(`http://localhost:8080/users/find?userName=${username}&password=${password}`);
      
        this.currentUser = await httpResponse.json();
        this.notifyOfUser.next(this.currentUser);
             
         localStorage.setItem('userId', this.currentUser.userId as unknown as string);
         localStorage.setItem('userName', this.currentUser.userName);
         localStorage.setItem('password', this.currentUser.password);
         localStorage.setItem('admin', this.currentUser.admin as unknown as string);
         //const newAdmin = new Admin(this.currentUser.admin);
         this.currentAdmin = new Admin(this.currentUser.admin);

         this.notifyOfAdmin.next(this.currentAdmin);
        return this.currentUser;
    }

    signOut() {
        this.currentUser = null;
        this.notifyOfUser.next(this.currentUser);
        this.workoutService.clearWorkoutData();
        this.currentAdmin = new Admin(false);
        this.notifyOfAdmin.next(this.currentAdmin);
    }

    signUp(user: User) {
        console.log("You are signed up" );

        if(user.userName != null && user.password != null) {
          
            this.http.post<User>('http://localhost:8080/users', user, {headers : this.postHeaders}).subscribe(
                (response) => {
                
                  // If there is a response the user is signed up
                  // So sign them in
                  if (response != null) {
                  user.userId = response.userId;
                  console.log(user.userId + " " + user.userName);
                
                  alert("You have successfully signed up.  Please press Sign In to access your profile");

                  } else {
                    alert('You already have an account, please select Sign In.');
                  }
                }
            );
        } else {
            alert("Please enter valid name and password");
        }   
    }
}