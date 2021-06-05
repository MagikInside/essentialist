import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {Trip} from '../models/trip.model';

@Component({
  selector: 'app-current-trip',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './current-trip.component.html',
  styleUrls: ['./current-trip.component.sass']
})
export class CurrentTripComponent implements OnInit {

  @Input() trips: Trip[] | null = [];

  constructor() { }

  ngOnInit(): void {
  }

}
