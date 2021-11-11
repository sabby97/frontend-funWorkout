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
  signedOutToggle: boolean = true;
  currentUser: User;

  async signIn() {
  
    this.currentUser = await this.signInService.signIn(this.username, this.password);
    console.log(this.currentUser);

    if (this.currentUser.userId !== 0) {
      this.signedOutToggle = false;
      this.username = "";
      this.password = "";
    } else {
      alert("There is no user with these credentials.  Please try again.");
      this.signOut();
    }
  }

  signOut() {
      this.signInService.signOut();
      this.signedOutToggle = true;
  }

}
