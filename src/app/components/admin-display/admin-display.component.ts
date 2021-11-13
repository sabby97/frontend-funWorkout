import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/services/admin-service';

@Component({
  selector: 'app-admin-display',
  templateUrl: './admin-display.component.html',
  styleUrls: ['./admin-display.component.css']
})
export class AdminDisplayComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.adminChecker();
  }
checkAdmin = false;

  adminChecker():void{
    if(localStorage.getItem("isAdmin"))
     {this.checkAdmin=true;}
     else
     {this.checkAdmin=false;}
     console.log(this.checkAdmin);
  }
    
  


}
