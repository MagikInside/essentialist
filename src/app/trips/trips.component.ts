import {Component, Input, OnInit} from '@angular/core';
import {Trip} from '../models/trip.model';

@Component({
  selector: 'app-trips',
  templateUrl: './trips.component.html',
  styleUrls: ['./trips.component.sass']
})
export class TripsComponent implements OnInit {

  @Input() trips: Trip[] | null = [];

  constructor() { }

  ngOnInit(): void {
  }

}
