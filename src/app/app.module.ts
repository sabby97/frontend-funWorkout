import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignInOutComponent } from './components/sign-in-out/sign-in-out.component';
import { WorkoutPlanDisplayComponent } from './components/workout-plan-display/workout-plan-display.component';
import { RandomWorkoutComponent } from './components/random-workout/random-workout.component';
import { CustomWorkoutComponent } from './components/custom-workout/custom-workout.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import {FocusedMvpComponent} from './components/focused-mvp/focused-mvp.component'

@NgModule({
  declarations: [
    AppComponent,
    SignInOutComponent,
    WorkoutPlanDisplayComponent,
    RandomWorkoutComponent,
    CustomWorkoutComponent,
    FocusedMvpComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    MatTableModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }