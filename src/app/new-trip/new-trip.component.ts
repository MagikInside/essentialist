import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-trip',
  templateUrl: './new-trip.component.html',
  styleUrls: ['./new-trip.component.sass']
})
export class NewTripComponent implements OnInit {

  constructor() { }

  statusOptions = [{status: 'itinerary'}, {status: 'proposal'}];
  selectedStatus = '';
  departure = null;
  arrival = null;

  ngOnInit(): void {
  }

}
