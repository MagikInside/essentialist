import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewTripRoutingModule } from './new-trip-routing.module';
import { NewTripComponent } from './new-trip.component';


@NgModule({
  declarations: [
    NewTripComponent
  ],
  imports: [
    CommonModule,
    NewTripRoutingModule
  ]
})
export class NewTripModule { }
