import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { User } from "../models/User";


@Injectable({
    providedIn: 'root'
})

export class SignInService {

    constructor(private http: HttpClient) { }

    // The signed in user should be available here.  Access it by injecting this
    // Service into your component class constructor
    currentUser: User;

    private postHeaders = new HttpHeaders({ 'Context-Type': 'application/json' });
    
    async signIn(username: string, password: string):Promise<User> {
        
     
        let httpResponse = await fetch(`http://localhost:8080/users/find?userName=${username}&password=${password}`);
      
        this.currentUser = await httpResponse.json();
        console.log(this.currentUser);
        
         localStorage.setItem('userId', this.currentUser.userId as unknown as string);
         localStorage.setItem('userName', this.currentUser.userName);
         localStorage.setItem('password', this.currentUser.password);
         localStorage.setItem('admin', this.currentUser.isAdmin as unknown as string);
        
        return this.currentUser;
    }

    signOut() {
        this.currentUser = null;
        localStorage.clear()
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