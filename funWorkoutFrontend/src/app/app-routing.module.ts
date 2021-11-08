import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FocusedMVPComponent } from './focused-mvp/focused-mvp.component';

const routes: Routes = [
  {path:'focused' , component: FocusedMVPComponent}
  // {}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
