import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/User';
import { SignInService } from 'src/app/services/sign-in-service';

@Component({
  selector: 'app-sign-in-out',
  templateUrl: './sign-in-out.component.html',
  styleUrls: ['./sign-in-out.component.css']
})
export class SignInOutComponent implements OnInit {

  constructor(private signInService: SignInService) { }

  ngOnInit(): void {
  }

  username: string;
  password: string;

  signIn() {
  
    const currentUser = this.signInService.signIn(this.username, this.password);
    this.username = "";
    this.password = "";
  }

  signOut() {
      this.signInService.signOut();
  }

}
