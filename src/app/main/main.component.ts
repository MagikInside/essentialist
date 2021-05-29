import { Component, OnInit } from '@angular/core';
import {TripsFacadeService} from '../trips-facade.service';
import {Observable} from 'rxjs';
import {Trip} from '../models/trip.model';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.sass']
})
export class MainComponent implements OnInit {

  upcomingTrip$: Observable<Trip[]>;
  pastTrip$: Observable<Trip[]>;


  constructor(private tripsFacade: TripsFacadeService) {
    this.upcomingTrip$ = tripsFacade.upcomingTrip$;
    this.pastTrip$ = tripsFacade.pastTrip$;
  }

  ngOnInit(): void {
  }

}
