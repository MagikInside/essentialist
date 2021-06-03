import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {MainComponent} from './main/main.component';
import {HeaderComponent} from './header/header.component';
import {TripDetailsComponent} from './trip-details/trip-details.component';
import {TripsComponent} from './trips/trips.component';
import {AccordionModule} from 'primeng/accordion';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CarouselModule} from 'primeng/carousel';
import {UnshiftFakeTripPipe} from './pipes/unshift-fake-trip.pipe';
import { CurrentTripComponent } from './current-trip/current-trip.component';
import { FormatTripDatesPipe } from './pipes/format-trip-dates.pipe';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    HeaderComponent,
    TripDetailsComponent,
    TripsComponent,
    UnshiftFakeTripPipe,
    CurrentTripComponent,
    FormatTripDatesPipe
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AccordionModule,
    CarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
