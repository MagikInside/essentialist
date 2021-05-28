import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {NewTripComponent} from './new-trip/new-trip.component';
import {MainComponent} from './main/main.component';
import {TripDetailsComponent} from './trip-details/trip-details.component';

const routes: Routes = [
  { path: 'new-trip', component: NewTripComponent},
  { path: 'trip/:hash', component: TripDetailsComponent},
  { path: '', component: MainComponent },
  { path: '**', component: MainComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
