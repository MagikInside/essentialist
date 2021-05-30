import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewTripRoutingModule } from './new-trip-routing.module';
import { NewTripComponent } from './new-trip.component';
import {InputTextModule} from 'primeng/inputtext';
import {DropdownModule} from 'primeng/dropdown';
import {FormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    NewTripComponent
  ],
  imports: [
    CommonModule,
    NewTripRoutingModule,
    FormsModule,
    InputTextModule,
    DropdownModule
  ]
})
export class NewTripModule { }
