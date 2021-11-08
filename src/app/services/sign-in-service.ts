import { Injectable } from "@angular/core";
import { User } from "../models/User";

@Injectable({
    providedIn: 'root'
})

export class SignInService {

    constructor() { }

    currentUser: User;

    signIn(user: User) {
      if(user && user.userName && user.password) {

      }
    }

    signOut() {
        this.currentUser = null;
    }
}