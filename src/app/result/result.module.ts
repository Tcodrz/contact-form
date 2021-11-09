import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ResultRoutingModule } from './result-routing.module';
import { ResultComponent } from './result.component';
import { ResultCardComponent } from './result-card/result-card.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';


@NgModule({
  declarations: [
    ResultComponent,
    ResultCardComponent
  ],
  imports: [
    CommonModule,
    ResultRoutingModule,
    MDBBootstrapModule.forRoot()
  ]
})
export class ResultModule { }
