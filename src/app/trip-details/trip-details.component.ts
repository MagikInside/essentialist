import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Observable} from 'rxjs';
import {map, mergeAll, switchMap} from 'rxjs/operators';
import {TripsFacadeService} from '../services/trips-facade.service';
import {Trip} from '../models/trip.model';

@Component({
  selector: 'app-trip-details',
  templateUrl: './trip-details.component.html',
  styleUrls: ['./trip-details.component.sass']
})
export class TripDetailsComponent implements OnInit {

  tripDetail$: Observable<Trip> | null = null;

  constructor(private route: ActivatedRoute, private tripsFacade: TripsFacadeService) { }

  ngOnInit(): void {
    window.scrollTo(0, 0);
    this.tripDetail$ = this.route.paramMap.pipe(
      switchMap(params => this.tripsFacade.trip$.pipe(
          map(trips => trips.filter(trip => trip.hash === params.get('hash'))),
          mergeAll()
        )));
  }

}
