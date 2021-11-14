import { Component, OnInit } from '@angular/core';
import { from, Subscription } from 'rxjs';
import { Admin } from 'src/app/models/Admin';
import { User } from 'src/app/models/User';
import { AdminService } from 'src/app/services/admin-service';
import { SignInService } from 'src/app/services/sign-in-service';
@Component({
  selector: 'app-admin-display',
  templateUrl: './admin-display.component.html',
  styleUrls: ['./admin-display.component.css']
})
export class AdminDisplayComponent implements OnInit {

  sub:Subscription;
  adminUser:User;
  checkAdmin:Boolean;
  admin:Admin;


  constructor(private adminService:AdminService, private signInService:SignInService) 
  {
    this.sub = signInService.notifyOfAdmin.subscribe((value) => 
    {this.admin = value;})

   }

  ngOnInit(): void {
   // this.adminChecker();
  }


  // adminChecker():void{
  //   if(this.adminUser.isAdmin)
  //    {this.checkAdmin=true;}
  //    else
  //    {this.checkAdmin=false;}
  //    console.log(this.checkAdmin);
  // }
    
  


}
