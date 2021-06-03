import {Component} from '@angular/core';
import {fromEvent, Observable} from 'rxjs';
import {Direction} from './models/direction.enum';
import {distinctUntilChanged, map, pairwise, share, throttleTime} from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
})
export class AppComponent {
  scroll$: Observable<Direction>;

  constructor() {
    this.scroll$= fromEvent(window, 'scroll').pipe(
      throttleTime(10),
      map(() => window.pageYOffset),
      pairwise(),
      map(([y1, y2]): Direction => (y2 < y1 ? Direction.Up : Direction.Down)),
      distinctUntilChanged(),
      share()
    );
  }



}
