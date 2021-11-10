import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProgressSpinnerComponent } from './progress-spinner/progress-spinner.component';
import { NavbarComponent } from './navbar/navbar.component';



@NgModule({
  declarations: [
    ProgressSpinnerComponent,
    NavbarComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ProgressSpinnerComponent,
    NavbarComponent
  ]
})
export class SharedModule { }
