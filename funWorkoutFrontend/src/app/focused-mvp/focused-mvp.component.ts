import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-focused-mvp',
  templateUrl: './focused-mvp.component.html',
  styleUrls: ['./focused-mvp.component.css']
})
export class FocusedMVPComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  // declaring all the objects
  title = 'fun Workout frontend';
  description='this will be the area for the workout something here';
  workout='Exercise name';
  apiCON(){}//  going to be used for reading in the api

}
