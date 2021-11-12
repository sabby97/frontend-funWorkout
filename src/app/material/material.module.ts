import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule}  from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { MatExpansionModule } from '@angular/material/expansion';



const MaterialComponents = [
  MatButtonModule,
  MatTableModule,
  MatCardModule,
  MatCheckboxModule,
  MatIconModule,
  MatExpansionModule,
]

@NgModule({

  imports: [MaterialComponents],
  exports: [MaterialComponents] 
})
export class MaterialModule { }
