import { NgModule } from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';
import {MainComponent} from './main/main.component';
import {TripDetailsComponent} from './trip-details/trip-details.component';

const routes: Routes = [
  { path: 'trip/:hash', component: TripDetailsComponent},
  { path: '', component: MainComponent },
  { path: 'new-trip', loadChildren: () => import('./new-trip/new-trip.module').then(m => m.NewTripModule) },
  { path: '**', component: MainComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
