import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignInOutComponent } from './components/sign-in-out/sign-in-out.component';
import { WorkoutPlanDisplayComponent } from './components/workout-plan-display/workout-plan-display.component';

@NgModule({
  declarations: [
    AppComponent,
    SignInOutComponent,
    WorkoutPlanDisplayComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
