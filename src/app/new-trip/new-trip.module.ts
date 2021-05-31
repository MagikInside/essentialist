import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NewTripRoutingModule} from './new-trip-routing.module';
import {NewTripComponent} from './new-trip.component';
import {InputTextModule} from 'primeng/inputtext';
import {DropdownModule} from 'primeng/dropdown';
import {FormsModule} from '@angular/forms';
import {CalendarModule} from 'primeng/calendar';


@NgModule({
  declarations: [
    NewTripComponent
  ],
  imports: [
    CommonModule,
    NewTripRoutingModule,
    FormsModule,
    InputTextModule,
    DropdownModule,
    CalendarModule
  ]
})
export class NewTripModule { }
