import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { SignInOutComponent } from './components/sign-in-out/sign-in-out.component';
import { WorkoutPlanDisplayComponent } from './components/workout-plan-display/workout-plan-display.component';
import { RandomWorkoutComponent } from './components/random-workout/random-workout.component';
import { CustomWorkoutComponent } from './components/custom-workout/custom-workout.component';
import { FocusedMvpComponent } from './components/focused-mvp/focused-mvp.component';
import { AdminDisplayComponent } from './components/admin-display/admin-display.component';
import { MaterialModule } from './material/material.module';
import { UserButtonsComponent } from './components/user-buttons/user-buttons.component';

@NgModule({
  declarations: [
    AppComponent,
    SignInOutComponent,
    WorkoutPlanDisplayComponent,
    RandomWorkoutComponent,
    CustomWorkoutComponent,
    FocusedMvpComponent,
    AdminDisplayComponent,
    UserButtonsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }