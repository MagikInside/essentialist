import {Component, Input, OnInit} from '@angular/core';
import {Trip} from '../models/trip.model';

@Component({
  selector: 'app-current-trip',
  templateUrl: './current-trip.component.html',
  styleUrls: ['./current-trip.component.sass']
})
export class CurrentTripComponent implements OnInit {

  @Input() trips: Trip[] | null = [];
  date = new Date();

  constructor() { }

  ngOnInit(): void {
  }

}
