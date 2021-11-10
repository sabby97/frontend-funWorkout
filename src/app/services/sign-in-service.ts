import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { User } from "../models/User";


@Injectable({
    providedIn: 'root'
})

export class SignInService {

    constructor(private http: HttpClient) { }

    currentUser: User;
    // private postHeaders = new HttpHeaders({ 'Context-Type': 'application/json' });

    async signIn(username: string, password: string):Promise<User> {
        
     
        let httpResponse = await fetch(`http://localhost:8080/users/find?userName=${username}&password=${password}`);
      
        let currentUser = await httpResponse.json();
        console.log(currentUser);
        
        localStorage.setItem('userId', currentUser.userId);
        localStorage.setItem('userName', currentUser.userName);
        localStorage.setItem('password', currentUser.password);
        localStorage.setItem('admin', currentUser.admin);
        

        return currentUser;
    }

    signOut() {
        this.currentUser = null;
        localStorage.clear()
    }
}