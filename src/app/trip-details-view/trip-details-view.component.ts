import {Component, Input, OnInit} from '@angular/core';
import {Trip} from '../models/trip.model';

@Component({
  selector: 'app-trip-details-view',
  templateUrl: './trip-details-view.component.html',
  styleUrls: ['./trip-details-view.component.sass']
})
export class TripDetailsViewComponent implements OnInit {

  @Input() trip: Trip | null = null;

  constructor() { }

  ngOnInit(): void {
  }

}
