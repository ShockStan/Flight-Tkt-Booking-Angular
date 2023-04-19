import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FlightRoutingModule } from './flight-routing.module';
import { FlightComponent } from './flight.component';

import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from 'src/material.module';


@NgModule({
  declarations: [
    FlightComponent
  ],
  imports: [
    CommonModule,
    FlightRoutingModule,
    HttpClientModule,
    MaterialModule
  ]
})
export class FlightModule { }
