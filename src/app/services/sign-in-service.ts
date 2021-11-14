import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { User } from "../models/User";
import { Subject } from "rxjs";
import { Admin } from "../models/Admin";


@Injectable({
    providedIn: 'root'
})

export class SignInService {

    constructor(private http: HttpClient) { }

    // The signed in user should be available here.  Access it by injecting this
    // Service into your component class constructor
    currentUser: User;
    // to let admin access know if the user loggin in is an admin
    notifyOfAdmin: Subject<Admin> = new Subject<Admin>();

    private postHeaders = new HttpHeaders({ 'Context-Type': 'application/json' });
    
    async signIn(username: string, password: string):Promise<User> {
        
     
        let httpResponse = await fetch(`http://localhost:8080/users/find?userName=${username}&password=${password}`);
      
        this.currentUser = await httpResponse.json();
        console.log(this.currentUser);
        
         localStorage.setItem('userId', this.currentUser.userId as unknown as string);
         localStorage.setItem('userName', this.currentUser.userName);
         localStorage.setItem('password', this.currentUser.password);
         localStorage.setItem('admin', this.currentUser.isAdmin as unknown as string);
         const newAdmin = new Admin(this.currentUser.isAdmin);
         this.notifyOfAdmin.next(newAdmin);
        return this.currentUser;
    }

    signOut() {
        this.currentUser = null;
        this.notifyOfAdmin= null;
    }

    signUp(user: User) {
        console.log("You are signed up" );

        this.http.post<User>('http://localhost:8080/users', user, {headers : this.postHeaders}).subscribe(
            (response) => {
                // If user is not in the database already
                // add him
                if (response != null) {
                user.userId = response.userId;
                console.log(user.userId + " " + user.userName);
                } else {

                    alert('Since you already have an account, you have been signed in');
                }
            }
        );
    }
}