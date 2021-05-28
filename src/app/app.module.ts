import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { HeaderComponent } from './header/header.component';
import { NewTripComponent } from './new-trip/new-trip.component';
import { TripDetailsComponent } from './trip-details/trip-details.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    HeaderComponent,
    NewTripComponent,
    TripDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
