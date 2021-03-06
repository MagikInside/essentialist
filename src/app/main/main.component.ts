import { Component, OnInit } from '@angular/core';
import {TripsFacadeService} from '../services/trips-facade.service';
import {Observable} from 'rxjs';
import {Trip} from '../models/trip.model';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.sass']
})
export class MainComponent implements OnInit {

  currentTrip$: Observable<Trip[]>;
  upcomingTrip$: Observable<Trip[]>;
  pastTrip$: Observable<Trip[]>;


  constructor(private tripsFacade: TripsFacadeService) {
    this.currentTrip$ = tripsFacade.currentTrip$;
    this.upcomingTrip$ = tripsFacade.upcomingTrip$;
    this.pastTrip$ = tripsFacade.pastTrip$;
  }

  ngOnInit(): void {
  }

}
