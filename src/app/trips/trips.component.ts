import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {Trip} from '../models/trip.model';
import {Router} from '@angular/router';

@Component({
  selector: 'app-trips',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './trips.component.html',
  styleUrls: ['./trips.component.sass']
})
export class TripsComponent implements OnInit {

  @Input() trips: Trip[] | null = [];

  responsiveOptions = [
    {
      breakpoint: '1325px',
      numVisible: 2,
      numScroll: 2
    },
    {
      breakpoint: '900px',
      numVisible: 1,
      numScroll: 1
    },
  ];

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  openTrip(hash: string) {
    this.router.navigate([`trip/${hash}`]);
  }

}
